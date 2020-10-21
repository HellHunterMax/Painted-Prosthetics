using System;
using System.Collections.Generic;
using System.Linq;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class SqlImageRepository : IImageRepository
    {
        private readonly GalleryContext context;

        public SqlImageRepository(GalleryContext dbContext)
        {
            context = dbContext;
        }

        public void CreateImage(Image image)
        {
            if (image == null)
            {
                throw new ArgumentNullException($"{nameof(image)} cannot be null");
            }

            context.Images.Add(image);
        }

        public void DeleteImage(Image image)
        {
            if (image == null)
            {
                throw new ArgumentNullException($"{nameof(image)} cannot be null");
            }

            context.Images.Remove(image);
        }

        public Image GetImage(int id)
        {
            return context.Images.FirstOrDefault(x => x.ImageId == id);
        }

        public IEnumerable<Image> GetImages()
        {
            return context.Images.ToList();
        }

        public bool SaveChanges()
        {
            return (context.SaveChanges() >= 0);
        }

        public void UpdateImage(Image image)
        {
            //Nothing
        }
    }
}
