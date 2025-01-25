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
    public class BoatService : IBoatService
    {
        private readonly IMongoRepository<Boat> _mongoRepository;

        public BoatService(IMongoRepository<Boat> mongoRepository)
        {
            _mongoRepository = mongoRepository;
        }

        public async Task CreateAsync(Boat boat)
        {
            await _mongoRepository.InsertOneAsync(boat);
        }

        public async Task<List<Boat>> GetAllAsync()
        {
            return await _mongoRepository.AsQueryable().ToListAsync();
        }

        public async Task<Boat> GetOneAsync(string id)
        {
            return await _mongoRepository.FindOneAsync(x => x.Id == new MongoDB.Bson.ObjectId(id));
        }

        public async Task UpdateAsync(string id, Boat boat)
        {
           throw new NotImplementedException();
        }

        public async Task DeleteAsync(string id)
        {
            await _mongoRepository.DeleteByIdAsync(id);
        }
    }

}
