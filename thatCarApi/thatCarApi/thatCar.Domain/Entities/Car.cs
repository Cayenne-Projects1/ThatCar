using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    [BsonCollection("Cars")]
    [BsonIgnoreExtraElements]
    public class Car: Vehicle
    {
        public int NumberOfDoors { get; set; }
        public Transmission Transmission { get; set; }
    }
}
