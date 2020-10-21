using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;

namespace PP.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly IArtistRepository _artistRepository;
        private readonly IMapper _mapper;

        public ArtistsController(IArtistRepository artistRepository, Mapper mapper)
        {
            _artistRepository = artistRepository;
            _mapper = mapper;
        }
    }
}
