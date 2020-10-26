using System;
using System.Collections.Generic;
using System.Linq;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class SqlImageRepository : IImageRepository
    {
        private readonly GalleryContext _context;

        public SqlImageRepository(GalleryContext dbContext)
        {
            _context = dbContext;
        }

        public void CreateImage(Image image)
        {
            if (image == null)
            {
                throw new ArgumentNullException($"{nameof(image)} cannot be null");
            }

            _context.Images.Add(image);
        }

        public void DeleteImage(Image image)
        {
            if (image == null)
            {
                throw new ArgumentNullException($"{nameof(image)} cannot be null");
            }

            _context.Images.Remove(image);
        }

        public Image GetImage(int id)
        {
            return _context.Images.FirstOrDefault(x => x.ImageId == id);
        }

        public IEnumerable<Image> GetImages()
        {
            return _context.Images.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateImage(Image image)
        {
            //Nothing
        }
    }
}
