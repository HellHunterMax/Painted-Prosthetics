using System.Collections.Generic;
using PP.Web.API.Dtos;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public interface IUserService
    {
        UserReplyDto Authenticate(UserRequestDto model);
        IEnumerable<User> GetAll();
        User GetById(int id);
    }
}
