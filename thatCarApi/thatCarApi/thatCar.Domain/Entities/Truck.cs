using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    [BsonCollection("Trucks")]
    [BsonIgnoreExtraElements]
    public class Truck: Vehicle
    {
        public decimal LoadCapacity { get; set; }
        public TruckType TruckType { get; set; }
    }
}
