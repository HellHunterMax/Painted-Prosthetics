using System.Text.Json.Serialization;

namespace PP.Web.API.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
    }
}
