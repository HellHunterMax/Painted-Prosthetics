using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class SqlImageRepository : IImageRepository
    {
        private readonly GalleryContext _dbContext;

        public SqlImageRepository(GalleryContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void CreateImage(Image image)
        {
            if (image == null)
            {
                throw new ArgumentNullException($"{nameof(image)} cannot be null");
            }

            _dbContext.Images.Add(image);

        }

        public Image GetImage(int id)
        {
            return _dbContext.Images.FirstOrDefault(x => x.ImageId == id);
        }

        public IEnumerable<Image> GetImages()
        {
            return _dbContext.Images.ToList();
        }

        public bool SaveChanges()
        {
            return (_dbContext.SaveChanges() >= 0);
        }
    }
}
