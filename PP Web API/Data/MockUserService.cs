using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using PP.Web.API.Dtos;
using PP.Web.API.Helpers;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class MockUserService : IUserService
    {
        private readonly User _user = new User { Id = 1, Name = "Max", Password = "Testing" };
        private readonly string _token = "faketoken";
        private readonly AppSettings _appSettings;

        public MockUserService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }
        public UserReplyDto Authenticate(UserRequestDto model)
        {
            if (model == null)
            {
                return null;
            }
            if (model.Name == _user.Name)
            {
                return new UserReplyDto(_user, _token);
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
