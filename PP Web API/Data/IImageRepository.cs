using System;
using System.Collections.Generic;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public interface IImageRepository
    {
        bool SaveChanges();
        IEnumerable<Image> GetImages();
        Image GetImage(int id);
        void CreateImage(Image image);
        void UpdateImage(Image image);
    }
}
