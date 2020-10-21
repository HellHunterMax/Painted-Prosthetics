using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using PP.Web.API.Model;

namespace PP.Web.API.Dtos
{
    public class ImageCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int ArtistId { get; set; }

        //public Artist Artist { get; set; }

        //public DateTime AddDate { get; set; }

        [Required]
        public int Likes { get; set; }

        [Required]
        public Uri Uri { get; set; }
    }
}
