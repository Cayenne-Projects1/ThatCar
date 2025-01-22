using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using thatCar.Application.DTOs;
using thatCar.Application.Interfaces;

namespace thatCarApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
      _userService = userService;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("getUsers")]
    public async Task<IActionResult> GetAll()
    {
      var response = await _userService.GetAllUsers();

      return Ok(response);
    }

    [Authorize]
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
      var response = await _userService.GetUserById(id);
      return Ok(response);
    }

    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
      var response = await _userService.DeleteUser(id);
      return Ok(response);
    }


    [HttpPost]
    public async Task<IActionResult> Create([FromBody] UserDto user)
    {
      var response = await _userService.AddUser(user);
      return Ok(response);
    }

    [HttpPut]
    public async Task<IActionResult> Update([FromBody] UserDto user)
    {
      var response = await _userService.UpdateUser(user);
      return Ok(response);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto user)
    {
      var response = await _userService.Login(user);

      return Ok(response);
    }
  }
}
