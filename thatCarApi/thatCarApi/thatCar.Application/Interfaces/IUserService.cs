
using thatCar.Application.DTOs;
using thatCar.Domain.Entities;

namespace thatCar.Application.Interfaces
{
  public interface IUserService
  {
    Task<APIResponse> GetUserById(string id);
    Task<IEnumerable<APIResponse>> GetAllUsers();
    Task<APIResponse> AddUser(UserDto user);
    Task<APIResponse> UpdateUser(UserDto user);
    Task<APIResponse> DeleteUser(string id);
    Task<APIResponse> Login(LoginDto user);
  }
}
