using System;
using System.ComponentModel.DataAnnotations;

namespace PP.Web.API.Model
{
    public class Image
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public Artist Artist { get; set; }

        [Required]
        public DateTime AddDate { get; set; }

        public int Likes { get; set; }

        [Required]
        public string Uri { get; set; }
    }
}
