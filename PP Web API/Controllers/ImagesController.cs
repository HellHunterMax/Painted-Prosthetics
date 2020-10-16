using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;
using PP.Web.API.Model;

namespace PP.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IImageRepository _imageRepository;

        public ImagesController(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
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
        public ActionResult<Image> GetImageId(int id)
        {
            var imageItem = _imageRepository.GetImage(id);

            return Ok(imageItem);
        }
    }
}
