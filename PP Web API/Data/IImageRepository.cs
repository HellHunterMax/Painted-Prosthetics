using System;
using System.Collections.Generic;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public interface IImageRepository
    {
        IEnumerable<Image> GetImages();
        Image GetImage(int id);
    }
}
