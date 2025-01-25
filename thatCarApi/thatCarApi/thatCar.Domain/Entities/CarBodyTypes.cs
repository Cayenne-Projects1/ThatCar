using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    [BsonCollection("CarBodyTypes")]
    [BsonIgnoreExtraElements]
    public class CarBodyTypes : Document
    {
        public string Name { get; set; }
    }
}
