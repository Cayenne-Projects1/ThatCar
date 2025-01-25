using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Application.Interfaces;
using thatCar.Domain.Entities.Mongo;
using thatCar.Domain.Entities;
using MongoDB.Driver.Linq;

namespace thatCar.Application.Services
{
    public class CarService : ICarService
    {
        private readonly IMongoRepository<Car> _mongoRepository;

        public CarService(IMongoRepository<Car> mongoRepository)
        {
            _mongoRepository = mongoRepository;
        }

        public async Task CreateAsync(Car car)
        {
            await _mongoRepository.InsertOneAsync(car);
        }

        public async Task<List<Car>> GetAllAsync()
        {
            return await _mongoRepository.AsQueryable().ToListAsync();
        }

        public async Task<Car> GetOneAsync(string id)
        {
            return await _mongoRepository.FindOneAsync(x => x.Id == new MongoDB.Bson.ObjectId(id));
        }

        public async Task UpdateAsync(string id, Car car)
        {
            throw new NotImplementedException();
           // await _mongoRepository.UpdateOneAsync(x => x.Id == new MongoDB.Bson.ObjectId(id), car);
        }

        public async Task DeleteAsync(string id)
        {
            await _mongoRepository.DeleteByIdAsync(id);
        }
    }

}
