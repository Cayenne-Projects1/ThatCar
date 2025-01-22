using Microsoft.VisualBasic;
using MongoDB.Driver;
using thatCar.Application.DTOs;
using thatCar.Application.Helpers;
using thatCar.Application.Interfaces;
using thatCar.Domain.Entities;
using thatCar.Domain.Entities.Mongo;
using thatCar.Infrastructure.Utilities;

namespace thatCar.Application.Services
{
  public class UserService : IUserService
  {

    private readonly IMongoRepository<User> _mongoRepositoryUser;

    public UserService(IMongoRepository<User> mongoRepositoryUser)
    {
      _mongoRepositoryUser = mongoRepositoryUser;
    }

    public async Task<APIResponse> AddUser(UserDto user)
    {
      var response = new APIResponse();

      try
      {
        var data = await _mongoRepositoryUser.FindOneAsync(x => x.Username == user.Username);

        if (data == null)
        {
          PasswordHasher.CreatePasswordHash(user.Password, out var passwordHash, out var passwordSalt);

          var newUser = new User
          {
            AccountId = Guid.NewGuid().ToString(),
            Username = user.Username,
            Name = user.Name,
            Email = user.Email,
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,
            CreatedAt = DateTime.UtcNow,
            IsActive = true
          };

          await _mongoRepositoryUser.InsertOneAsync(newUser);

          response.IsSuccessful = true;
          response.Message = $"User account {user.Username} created successfully.";
          response.Data = data;
        }
        else
        {
          response.IsSuccessful = false;
          response.Message = $"Account with username {user.Username} already exist";
        }
      }
      catch (Exception ex)
      {
        response.IsSuccessful = false;
        response.Message = $"An error occurred: {ex.Message}";
      }

      return response;
    }

    public async Task<APIResponse> DeleteUser(string id)
    {
      var response = new APIResponse();

      try
      {
        var data = await _mongoRepositoryUser.FindOneAsync(x => x.AccountId == id);

        if (data != null)
        {
          await _mongoRepositoryUser.DeleteOneAsync(x => x.AccountId == id);

          response.IsSuccessful = true;
          response.Message = $"User account {data.Username} deleted successfully.";
          response.Data = data;
        }
        else
        {
          response.IsSuccessful = false;
          response.Message = $"Account with Account id  {id} does not exist";
        }
      }
      catch (Exception ex)
      {
        response.IsSuccessful = false;
        response.Message = $"An error occurred: {ex.Message}";
      }

      return response;
    }

    public async Task<IEnumerable<APIResponse>> GetAllUsers()
    {
      var response = new APIResponse();
      try
      {
        var data = _mongoRepositoryUser.FilterBy(x => x.IsActive == true);

        response.IsSuccessful = true;
        response.Message = "Retrived";
        response.Data = data;
      }
      catch (Exception ex)
      {
        response.IsSuccessful = false;
        response.Message = $"An error occurred: {ex.Message}";
      }
      return new List<APIResponse>() { response };
    }

    public async Task<APIResponse> GetUserById(string id)
    {
      var response = new APIResponse();

      try
      {
        var data = await _mongoRepositoryUser.FindOneAsync(x => x.AccountId == id);

        if (data is not null)
        {
          response.IsSuccessful = true;
          response.Message = $"User account {data.Username} successfully.";
          response.Data = data;
        }
        else
        {
          response.IsSuccessful = false;
          response.Message = $"Account with Account id {id} does not exist";
        }
      }
      catch (Exception ex)
      {
        response.IsSuccessful = false;
        response.Message = $"An error occurred: {ex.Message}";
      }

      return response;
    }

    public async Task<APIResponse> Login(LoginDto user)
    {
      var response = new APIResponse();

      try
      {
        var data = await _mongoRepositoryUser.FindOneAsync(x => x.Username == user.Username);

        if (data != null && PasswordHasher.VerifyPasswordHash(user.Password, data.PasswordHash, data.PasswordSalt))
        {
          var jwtDetails = JwtHelper.BuildJwt(Guid.Parse(data.AccountId));
          response.IsSuccessful = true;
          response.Message = $"User account {data.Username} successfully.";
          response.Data = new { jwt = jwtDetails, user = data };
        }
        else
        {
          response.IsSuccessful = false;
          response.Message = $"Invalid user credentials";
        }
      }
      catch (Exception ex)
      {
        response.IsSuccessful = false;
        response.Message = $"An error occurred: {ex.Message}";
      }

      return response;
    }

    public async Task<APIResponse> UpdateUser(UserDto user)
    {
      var response = new APIResponse();

      try
      {
        var data = await _mongoRepositoryUser.FindOneAsync(x => x.Username == user.Username);

        if (data != null)
        {
          PasswordHasher.CreatePasswordHash(user.Password, out var passwordHash, out var passwordSalt);

          data.Email = user.Email;
          data.Name = user.Name;
          data.PasswordHash = passwordHash;
          data.PasswordSalt = passwordSalt;

          await _mongoRepositoryUser.ReplaceOneAsync(data);

          response.IsSuccessful = true;
          response.Message = $"User account {data.Username} updated successfully.";
          response.Data = data;
        }
        else
        {
          response.IsSuccessful = false;
          response.Message = $"Account with Account id {user.Username} does not exist";
        }
      }
      catch (Exception ex)
      {
        response.IsSuccessful = false;
        response.Message = $"An error occurred: {ex.Message}";
      }

      return response;
    }
  }
}
