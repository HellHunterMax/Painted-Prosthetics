using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PP.Web.API.Model
{
    public class Image
    {
        [Key]
        [Column(Order = 1)]
        public int ImageId { get; set; }

        [Required]
        public string Name { get; set; }


        public int ArtistId { get; set; }

        [Required]
        public Artist Artist { get; set; }

        [Required]
        public DateTime AddDate { get; set; }

        public int Likes { get; set; }

        [Required]
        public string Uri { get; set; }
    }
}
