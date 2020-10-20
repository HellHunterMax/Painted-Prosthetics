using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IImageRepository _imageRepository;
        private readonly IMapper _mapper;

        public ImagesController(IImageRepository imageRepository, IMapper mapper)
        {
            _imageRepository = imageRepository;
            _mapper = mapper;
        }

        //Get api/Images
        [HttpGet]
        public ActionResult<IEnumerable<Image>> GetAllImages()
        {
            var imagesItems = _imageRepository.GetImages();

            return Ok(imagesItems);
        }

        //Get api/Images/id
        [HttpGet("{id}")]
        public ActionResult<ImageReadDto> GetImageId(int id)
        {
            var imageItem = _imageRepository.GetImage(id);

            if(imageItem != null)
            {
                return Ok(_mapper.Map<ImageReadDto>(imageItem));
            }
            return NotFound();
        }
    }
}
