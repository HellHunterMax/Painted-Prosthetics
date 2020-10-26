using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
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
            var artists = _context.Artists.Include(artist => artist.Images).ToList();
            return artists;
        }

        public Artist GetArtist(int id)
        {
            var artist = _context.Artists.SingleOrDefault(artist => artist.ArtistId == id);
            _context.Entry(artist).Collection(a => a.Images).Load();

            //var artist = _context.Artists.Include(artist => artist.Images).FirstOrDefault(x => x.ArtistId == id);
            return artist;
        }

        public void CreateArtist(Artist artist)
        {
            if (artist == null)
            {
                throw new ArgumentNullException($"{nameof(artist)} cannot be null!");
            }

            _context.Add(artist);
        }

        public void UpdateArtist(Artist artist)
        {
            //Nothing
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
