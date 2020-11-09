using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PP.Web.API.Dtos;

namespace PP.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        //api/Users
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] UserDto userDto)
        {
            if (userDto == null)
            {
                return BadRequest("Username or password is incorrect");
            }
            if (userDto.Name == "Max" && userDto.Password == "Testing")
            {
                return Ok(userDto);
            }
            return BadRequest("Username or password is incorrect");
        }
    }
}
