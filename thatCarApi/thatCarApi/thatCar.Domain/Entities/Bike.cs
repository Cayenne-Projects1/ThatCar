using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    [BsonCollection("Bikes")]
    [BsonIgnoreExtraElements]
    public class Bike: Vehicle
    {
        public bool HasSidecar { get; set; }
        public string Type { get; set; }
    }
}
