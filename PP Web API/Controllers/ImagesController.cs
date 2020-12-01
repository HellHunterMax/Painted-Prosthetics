using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IArtistRepository _artistRepository;
        private readonly IImageRepository _imageRepository;
        private readonly IMapper _mapper;

        public ImagesController(IImageRepository imageRepository, IArtistRepository artistRepository, IMapper mapper)
        {
            _artistRepository = artistRepository;
            _imageRepository = imageRepository;
            _mapper = mapper;
        }

        //Get api/images
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IEnumerable<ImageReadDto>> GetAllImages()
        {
            var imagesItems = _imageRepository.GetImages();

            return Ok(_mapper.Map<IEnumerable<ImageReadDto>>(imagesItems));
        }

        //Get api/images/id
        [AllowAnonymous]
        [HttpGet("{id}", Name = "GetImageId")]
        public ActionResult<ImageReadDto> GetImageId(int id)
        {
            var imageItem = _imageRepository.GetImage(id);

            if (imageItem != null)
            {
                return Ok(_mapper.Map<ImageReadDto>(imageItem));
            }
            return NotFound();
        }

        //TODO create test to see if artist is good.
        //TODO add to Artisttest CreateImage
        //POST api/images
        [HttpPost]
        public ActionResult<ImageReadDto> CreateImage(ImageCreateDto imageCreateDto)
        {
            var image = _mapper.Map<Image>(imageCreateDto);
            image.AddDate = DateTime.Now;

            var artist = _artistRepository.GetArtist(image.ArtistId);
            if (artist == null)
            {
                return ValidationProblem("No artist with this number found");
            }

            _imageRepository.CreateImage(image);
            _imageRepository.SaveChanges();

            var imageReadDto = _mapper.Map<ImageReadDto>(image);

            return CreatedAtRoute(nameof(GetImageId), new { Id = imageReadDto.ImageId }, imageReadDto);
        }

        //TODO add to Artisttest 
        //PUT api/images/{id}
        [HttpPut("{id}")]
        public ActionResult UpDateImage(int id, ImageUpdateDto imageUpdateDto)
        {
            var imageFromRepo = _imageRepository.GetImage(id);

            if (imageFromRepo == null)
            {
                return NotFound();
            }

            _mapper.Map(imageUpdateDto, imageFromRepo);

            _imageRepository.UpdateImage(imageFromRepo);
            _imageRepository.SaveChanges();

            return NoContent();
        }

        //TODO add to Artisttest 
        //PATCH api/Image/{id}
        [HttpPatch("{id}")]
        public ActionResult PartialImageUpdate(int id, JsonPatchDocument<ImageUpdateDto> patchDoc)
        {
            var imageFromRepo = _imageRepository.GetImage(id);

            if (imageFromRepo == null)
            {
                return NotFound();
            }

            var imageToPatch = _mapper.Map<ImageUpdateDto>(imageFromRepo);
            patchDoc.ApplyTo(imageToPatch, ModelState);

            if (!TryValidateModel(imageToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(imageToPatch, imageFromRepo);

            _imageRepository.UpdateImage(imageFromRepo);
            _imageRepository.SaveChanges();

            return NoContent();
        }

        //DELETE api/images/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteImage(int id)
        {
            var imageFromRepo = _imageRepository.GetImage(id);

            if (imageFromRepo == null)
            {
                return NotFound();
            }

            _imageRepository.DeleteImage(imageFromRepo);
            _imageRepository.SaveChanges();

            return NoContent();
        }
    }
}
