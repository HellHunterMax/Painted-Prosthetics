using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PP.Web.API.Dtos;
using PP.Web.API.Helpers;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class MockUserService : IUserService
    {
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
            if (model.Name == _appSettings.Name && model.Password == _appSettings.Password)
            {
                User user = new User { Id = 1, Name = _appSettings.Name };
                var token = generateJwtToken(user);
                return new UserReplyDto(user, token);
            }
            else
            {
                return null;
            }
        }
        private string generateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
