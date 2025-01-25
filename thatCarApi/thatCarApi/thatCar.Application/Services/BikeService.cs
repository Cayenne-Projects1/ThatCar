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
    public class BikeService : IBikeService
    {
        private readonly IMongoRepository<Bike> _mongoRepository;

        public BikeService(IMongoRepository<Bike> mongoRepository)
        {
            _mongoRepository = mongoRepository;
        }

        public async Task CreateAsync(Bike bike)
        {
            await _mongoRepository.InsertOneAsync(bike);
        }

        public async Task<List<Bike>> GetAllAsync()
        {
            return await _mongoRepository.AsQueryable().ToListAsync();
        }

        public async Task<Bike> GetOneAsync(string id)
        {
            return await _mongoRepository.FindOneAsync(x => x.Id == new MongoDB.Bson.ObjectId(id));
        }

        public async Task UpdateAsync(string id, Bike bike)
        {
            throw new NotImplementedException();
            //await _mongoRepository.UpdateAsync(id, bike);
        }

        public async Task DeleteAsync(string id)
        {
            await _mongoRepository.DeleteByIdAsync(id);
        }
    }

}
