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
    public class TruckService : ITruckService
    {
        private readonly IMongoRepository<Truck> _mongoRepository;

        public TruckService(IMongoRepository<Truck> mongoRepository)
        {
            _mongoRepository = mongoRepository;
        }

        public async Task CreateAsync(Truck truck)
        {
            await _mongoRepository.InsertOneAsync(truck);
        }

        public async Task<List<Truck>> GetAllAsync()
        {
            return await _mongoRepository.AsQueryable().ToListAsync();
        }

        public async Task<Truck> GetOneAsync(string id)
        {
            return await _mongoRepository.FindOneAsync(x => x.Id == new MongoDB.Bson.ObjectId(id));
        }

        public async Task UpdateAsync(string id, Truck truck)
        {
            throw new NotImplementedException();
           // await _mongoRepository.UpdateAsync(id, truck);
        }

        public async Task DeleteAsync(string id)
        {
            await _mongoRepository.DeleteByIdAsync(id);
        }
    }

}
