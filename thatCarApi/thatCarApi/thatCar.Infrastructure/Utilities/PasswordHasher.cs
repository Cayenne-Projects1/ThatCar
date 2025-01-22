using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace thatCar.Infrastructure.Utilities
{
  public class PasswordHasher
  {
    public static void CreatePasswordHash(string password, out string passwordHash, out string passwordSalt)
    {
      using var hmac = new HMACSHA512();
      passwordSalt = Convert.ToBase64String(hmac.Key);
      passwordHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
    }

    public static bool VerifyPasswordHash(string password, string storedHash, string storedSalt)
    {
      using var hmac = new HMACSHA512(Convert.FromBase64String(storedSalt));
      var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
      return Convert.ToBase64String(computedHash) == storedHash;
    }
  }
}
