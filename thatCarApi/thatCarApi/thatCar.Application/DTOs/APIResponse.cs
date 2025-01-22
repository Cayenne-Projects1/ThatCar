using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace thatCar.Application.DTOs
{
  public class APIResponse
  {
    public bool IsSuccessful { get; set; } = false;
    public string Message { get; set; } = string.Empty;
    public dynamic Data { get; set; } = null;
  }
}
