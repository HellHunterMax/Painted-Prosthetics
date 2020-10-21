using System;
using System.ComponentModel.DataAnnotations;

namespace PP.Web.API.Dtos
{
    public class ImageUpdateDto
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
