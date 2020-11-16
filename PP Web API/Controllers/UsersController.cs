using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Data;
using PP.Web.API.Dtos;

namespace PP.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        //api/Users/authenticate
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] UserRequestDto userRequestDto)
        {

            if (userRequestDto == null)
            {
                return BadRequest("Username or password is incorrect");
            }
            UserReplyDto user = _userService.Authenticate(userRequestDto);
            if (user == null)
            {
                return BadRequest("Username or password is incorrect");
            }
            return Ok(user);
        }
    }
}
