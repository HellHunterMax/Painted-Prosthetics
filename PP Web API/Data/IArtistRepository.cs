using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public interface IArtistRepository
    {
        Artist GetArtist(int id);
        IEnumerable<Artist> GetAllArtists();
        void CreateArtist(Artist artist);
        void UpdateArtist(Artist artist);
        void DeleteArtist(Artist artist);
        bool SaveChanges();
    }
}
