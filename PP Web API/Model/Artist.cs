﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PP.Web.API.Model
{
    public class Artist
    {
        [Key]
        public int ArtistId { get; set; }

        [Required]
        public string Name { get; set; }


        public virtual ICollection<Image> Images { get; set; }


        public string Bio { get; set; }


        public string Website { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}
