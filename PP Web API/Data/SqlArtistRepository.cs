using System;
using System.Collections.Generic;
using System.Data;
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
            if (artist == null)
            {
                return artist;
            }

            _context.Entry(artist).Collection(a => a.Images).Load();

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

        public void DeleteArtist(Artist artist)
        {
            if (artist == null)
            {
                throw new ArgumentNullException($"{nameof(artist)} cannot be null!");
            }

            _context.Artists.Remove(artist);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
