using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PP.Web.API.Model;

namespace PP.Web.API.Dtos
{
    public class ImageReadDto
    {
        public int ImageId { get; set; }
        
        public string Name { get; set; }
        
        public int ArtistId { get; set; }

        public Artist Artist { get; set; }

        public DateTime AddDate { get; set; }

        public int Likes { get; set; }

        public string Uri { get; set; }
    }
}
