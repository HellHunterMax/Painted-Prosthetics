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
            var artists = _context.Artists.ToList();
            
            var images = _context.Images.ToList();
            /*
            foreach (Artist artist in artists)
            {
                if (artist == null)
                {
                    continue;
                }

                var foundImages = from image in images
                                  where image.ArtistId == artist.ArtistId
                                  select image;

                if (foundImages.ToList().Count != 0)
                {
                    artist.Images = foundImages.ToList();
                }
            }
            */
            return artists;
        }

        public Artist GetArtist(int id)
        {
            return _context.Artists.FirstOrDefault(x => x.ArtistId == id);
        }
    }
}
