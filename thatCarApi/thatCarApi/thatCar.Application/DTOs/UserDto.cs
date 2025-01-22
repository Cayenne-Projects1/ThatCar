using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace thatCar.Application.DTOs
{
  public class UserDto: LoginDto
  {
    public string Name { get; set; }
    public string Email { get; set; }
  }
}
