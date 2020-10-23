using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Controllers
{
    //api/artists
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
        [HttpGet]
        public ActionResult<IEnumerable<ArtistReadDto>> GetAllArtists()
        {
            var artists = _artistRepository.GetAllArtists().ToList();

            //_mapper.Map<IEnumerable<ArtistReadDto>>(artists);

            return Ok(_mapper.Map<IEnumerable<ArtistReadDto>>(artists));
        }

        //api/artists/{id}
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

        //TODO POST
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

        //TODO PUT
        //TODO PATCH
        //TODO DELETE

    }
}
