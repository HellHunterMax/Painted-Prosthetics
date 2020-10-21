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

        //Get api/images
        [HttpGet]
        public ActionResult<IEnumerable<ImageReadDto>> GetAllImages()
        {
            var imagesItems = _imageRepository.GetImages();


            return Ok(_mapper.Map<IEnumerable<ImageReadDto>>(imagesItems));
        }

        //Get api/images/id
        [HttpGet("{id}", Name = "GetImageId")]
        public ActionResult<ImageReadDto> GetImageId(int id)
        {
            var imageItem = _imageRepository.GetImage(id);

            if(imageItem != null)
            {
                return Ok(_mapper.Map<ImageReadDto>(imageItem));
            }
            return NotFound();
        }

        //POST api/images
        [HttpPost]
        public ActionResult<ImageReadDto> CreateImage(ImageCreateDto imageCreateDto)
        {
            var image = _mapper.Map<Image>(imageCreateDto);
            image.AddDate = DateTime.Now;
            _imageRepository.CreateImage(image);
            _imageRepository.SaveChanges();

            var imageReadDto = _mapper.Map<ImageReadDto>(image);

            return CreatedAtRoute(nameof(GetImageId), new { Id = imageReadDto.ImageId }, imageReadDto);
        }
    }
}
