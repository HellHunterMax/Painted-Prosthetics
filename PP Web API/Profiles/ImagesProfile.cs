using AutoMapper;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Profiles
{
    public class ImagesProfile : Profile
    {
        public ImagesProfile()
        {
            //source -> Target
            CreateMap<Image, ImageReadDto>();
            CreateMap<ImageCreateDto, Image>();
            CreateMap<ImageUpdateDto, Image>();
        }
    }
}
