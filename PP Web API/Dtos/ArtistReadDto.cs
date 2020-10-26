using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PP.Web.API.Dtos
{
    public class ArtistReadDto
    {
        [Key]
        public int ArtistId { get; set; }

        [Required]
        public string Name { get; set; }


        public virtual ICollection<ImageReadDto> Images { get; set; }


        public string Bio { get; set; }


        public string Website { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}
