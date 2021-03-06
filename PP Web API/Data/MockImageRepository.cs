﻿using System;
using System.Collections.Generic;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class MockImageRepository : IImageRepository
    {
        public void CreateImage(Image image)
        {
            throw new NotImplementedException();
        }

        public void DeleteImage(Image image)
        {
            throw new NotImplementedException();
        }

        public Image GetImage(int id)
        {
            return new Image { ImageId = 0, AddDate = new DateTime(2020, 01, 01), Likes = 0, Name = "First Image", Uri = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" };
        }

        public IEnumerable<Image> GetImages()
        {
            List<Image> images = new List<Image>
            {
                new Image { ImageId = 0, AddDate = new DateTime(2020, 01, 01), Likes = 0, Name = "First Image", Uri = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" },
                new Image { ImageId = 1, AddDate = new DateTime(2020, 01, 01), Likes = 10, Name = "Second Image", Uri = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" },
                new Image { ImageId = 2, AddDate = new DateTime(2020, 01, 01), Likes = 200, Name = "Third Image", Uri = "https://github.com/csinn/Painted-Prosthetics/blob/master/Docs/Images/Prosthetics2.PNG?raw=true" }
            };

            return images;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateImage(Image image)
        {
            throw new NotImplementedException();
        }
    }
}
