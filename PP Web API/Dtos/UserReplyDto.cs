
using PP.Web.API.Model;

namespace PP.Web.API.Dtos
{
    public class UserReplyDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Token { get; set; }

        public UserReplyDto(User user, string token)
        {
            Id = user.Id;
            Name = user.Name;
            Token = token;
        }
    }
}
