using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class MockImageRepository : IImageRepository
    {
        public Image GetImage(int id)
        {
            return new Image { Id = 0, AddDate = new DateTime(2020, 01, 01), Likes = 0, Name = "First Image", Url = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" };
        }

        public IEnumerable<Image> GetImages()
        {
            List<Image> images = new List<Image>
            {
                new Image { Id = 0, AddDate = new DateTime(2020, 01, 01), Likes = 0, Name = "First Image", Url = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" },
                new Image { Id = 1, AddDate = new DateTime(2020, 01, 01), Likes = 10, Name = "Second Image", Url = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" },
                new Image { Id = 2, AddDate = new DateTime(2020, 01, 01), Likes = 200, Name = "Third Image", Url = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" }
            };

            return images;
        }
    }
}
