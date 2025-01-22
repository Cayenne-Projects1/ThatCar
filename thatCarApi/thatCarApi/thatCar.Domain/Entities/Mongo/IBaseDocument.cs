using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace thatCar.Domain.Entities.Mongo
{
    public interface IBaseDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        ObjectId Id { get; set; }
    }
}
