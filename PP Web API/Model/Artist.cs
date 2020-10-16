using System.Collections.Generic;

namespace PP.Web.API.Model
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Image> Images { get; set; }
        public string Bio { get; set; }
        public string Website { get; set; }
        public string Email { get; set; }
    }
}
