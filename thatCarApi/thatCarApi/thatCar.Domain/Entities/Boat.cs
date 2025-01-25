using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    [BsonCollection("Boats")]
    [BsonIgnoreExtraElements]
    public class Boat: Vehicle
    {
        public int NumberOfEngines { get; set; }
        public decimal Length { get; set; }
    }
}
