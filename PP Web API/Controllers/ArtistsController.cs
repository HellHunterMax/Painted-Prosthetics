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

        //TODO GET
        //TODO GET ID
        //TODO POST
        //TODO PUT
        //TODO PATCH
        //TODO DELETE

    }
}
