using System;
using System.Collections.Generic;
using System.Linq;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class SqlArtistRepository : IArtistRepository
    {
        private readonly GalleryContext _context;

        public SqlArtistRepository(GalleryContext context)
        {
            _context = context;
        }
        public IEnumerable<Artist> GetAllArtists()
        {
            return _context.Artists.ToList();
        }

        public Artist GetArtist(int id)
        {
            return _context.Artists.FirstOrDefault(x => x.ArtistId == id);
        }
    }
}
