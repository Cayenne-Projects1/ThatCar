#nullable enable
using thatCar.Domain.Entities.Mongo;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace thatCar.Domain.Entities.Users
{
    [BsonCollection("AccountDetails")]
    [BsonIgnoreExtraElements]
    public class AccountDetails : Document
    {
        public string AccountId { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public bool Admin { get; set; }
        public string Email { get; set; }
        public DateTime CreateDateTime { get; set; }

    }
}
