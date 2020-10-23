using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PP.Web.API.Dtos
{
    public class ArtistUpdateDto
    {
        [Required]
        public string Name { get; set; }

        public string Bio { get; set; }

        public string Website { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}
