using System;
using PP.Web.API.Model;

namespace PP.Web.API.Dtos
{
    public class ImageReadDto
    {
        public int ImageId { get; set; }
        
        public string Name { get; set; }
        
        public int ArtistId { get; set; }

        //public Artist Artist { get; set; }

        public DateTime AddDate { get; set; }

        public int Likes { get; set; }

        public Uri Uri { get; set; }
    }
}
