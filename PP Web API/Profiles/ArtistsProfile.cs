using AutoMapper;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Profiles
{
    public class ArtistsProfile : Profile
    {
        public ArtistsProfile()
        {
            //source -> Target
            CreateMap<Artist, ArtistReadDto>();
            CreateMap<ArtistCreateDto, Artist>();
        }
    }
}
