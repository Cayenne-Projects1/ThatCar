using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace thatCar.Application.Interfaces
{
    public interface IVehicleService<T>
    {
        Task CreateAsync(T entity);
        Task<List<T>> GetAllAsync();
        Task<T> GetOneAsync(string id);
        Task UpdateAsync(string id, T entity);
        Task DeleteAsync(string id);
    }
}
