using AutoMapper;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Profiles
{
    public class ImagesProfile : Profile
    {
        public ImagesProfile()
        {
            CreateMap<Image, ImageReadDto>();
        }
    }
}
