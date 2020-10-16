using System;

namespace PP.Web.API.Model
{
    public class Image
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Artist Artist { get; set; }
        public DateTime AddDate { get; set; }
        public int Likes { get; set; }
        public string Uri { get; set; }
    }
}
