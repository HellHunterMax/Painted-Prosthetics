using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Controllers
{
    //api/artists
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly IArtistRepository _artistRepository;
        private readonly IMapper _mapper;

        public ArtistsController(IArtistRepository artistRepository, IMapper mapper)
        {
            _artistRepository = artistRepository;
            _mapper = mapper;
        }

        //api/artists
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IEnumerable<ArtistReadDto>> GetAllArtists()
        {
            var artists = _artistRepository.GetAllArtists().ToList();

            //_mapper.Map<IEnumerable<ArtistReadDto>>(artists);

            return Ok(_mapper.Map<IEnumerable<ArtistReadDto>>(artists));
        }

        //api/artists/{id}
        [AllowAnonymous]
        [HttpGet("{id}", Name = "GetArtistId")]
        public ActionResult<ArtistReadDto> GetArtistId(int id)
        {
            var artist = _artistRepository.GetArtist(id);

            if (artist == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ArtistReadDto>(artist));
        }

        //TODO block CreateArtist with authenticate
        //api/artists
        [HttpPost]
        public ActionResult<ArtistReadDto> CreateArtist(ArtistCreateDto artistCreateDto)
        {
            var artist = _mapper.Map<Artist>(artistCreateDto);
            _artistRepository.CreateArtist(artist);
            _artistRepository.SaveChanges();

            var artistReadDto = _mapper.Map<ArtistReadDto>(artist);

            return CreatedAtRoute(nameof(GetArtistId), new { Id = artistReadDto.ArtistId }, artistReadDto);
        }

        //TODO block UpdateArtist with authenticate
        //api/Artists/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateArtist(int id, ArtistUpdateDto artistUpdateDto)
        {
            var artistFromRepo = _artistRepository.GetArtist(id);

            if (artistFromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(artistUpdateDto, artistFromRepo);

            _artistRepository.UpdateArtist(artistFromRepo);
            _artistRepository.SaveChanges();

            return NoContent();
        }

        //TODO block PartialArtistUpdate with authenticate
        //api/Artists/{id}
        [HttpPatch("{id}")]
        public ActionResult PartialArtistUpdate(int id, JsonPatchDocument<ArtistUpdateDto> patchDoc)
        {
            var artistFromRepo = _artistRepository.GetArtist(id);

            if (artistFromRepo == null)
            {
                return NotFound();
            }

            var artistToPatch = _mapper.Map<ArtistUpdateDto>(artistFromRepo);
            patchDoc.ApplyTo(artistToPatch, ModelState);

            if (!TryValidateModel(artistToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(artistToPatch, artistFromRepo);

            _artistRepository.UpdateArtist(artistFromRepo);
            _artistRepository.SaveChanges();

            return NoContent();
        }

        //TODO block DeleteArtist with authenticate
        //api/Artists/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteArtist(int id)
        {
            var artistFromRepo = _artistRepository.GetArtist(id);

            if (artistFromRepo == null)
            {
                return NotFound();
            }

            _artistRepository.DeleteArtist(artistFromRepo);
            _artistRepository.SaveChanges();

            return NoContent();
        }

    }
}
