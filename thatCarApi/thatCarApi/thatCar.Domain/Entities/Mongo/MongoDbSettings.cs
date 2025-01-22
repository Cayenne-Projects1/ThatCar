using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    public class MongoDbSettings : IMongoDbSettings
    {
        public string DatabaseName { get; set; }
        public string ConnectionString { get; set; }
    }
}
