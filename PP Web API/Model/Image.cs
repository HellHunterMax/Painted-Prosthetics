using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PP.Web.API.Model
{
    public class Image
    {
        [Key]
        [Column(Order = 1)]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Column(Order = 2)]
        [Key, ForeignKey("Artist")]
        public Artist Artist { get; set; }

        [Required]
        public DateTime AddDate { get; set; }

        public int Likes { get; set; }

        [Required]
        public string Uri { get; set; }
    }
}
