using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities;

namespace thtaCar.Tests
{
    public class Migration
    {
        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;

        public Migration(IConfiguration configuration)
        {
            var connectionString = configuration["DatabaseSettings:ConnectionString"];
            var databaseName = configuration["DatabaseSettings:DatabaseName"];

            _client = new MongoClient(connectionString);
            _database = _client.GetDatabase(databaseName); ;
        }

        public async Task RunProvincesMigrationAsync()
        {
            var provinces = new[]
            {
                new Provinces { Name = "Gauteng", Abbreviation = "GP" },
                new Provinces { Name = "KwaZulu-Natal", Abbreviation = "KZN" },
                new Provinces { Name = "Western Cape", Abbreviation = "WC" },
                new Provinces { Name = "Eastern Cape", Abbreviation = "EC" },
                new Provinces { Name = "Free State", Abbreviation = "FS" },
                new Provinces { Name = "Limpopo", Abbreviation = "LP" },
                new Provinces { Name = "Mpumalanga", Abbreviation = "MP" },
                new Provinces { Name = "North West", Abbreviation = "NW" },
                new Provinces { Name = "Northern Cape", Abbreviation = "NC" }
            };

            var collection = _database.GetCollection<Provinces>("Provinces");
            await collection.DeleteManyAsync(FilterDefinition<Provinces>.Empty);
            await collection.InsertManyAsync(provinces);
        }

        public async Task RunCarBodyTypesMigrationAsync()
        {
            var carBodyTypes = new[]
            {
                new CarBodyTypes { Name = "SUV" },
                new CarBodyTypes { Name = "Sedan" },
                new CarBodyTypes { Name = "Hatchback" },
                new CarBodyTypes { Name = "Coupe" },
                new CarBodyTypes { Name = "Convertible" },
                new CarBodyTypes { Name = "Minivan" },
                new CarBodyTypes { Name = "Wagon" },
                new CarBodyTypes { Name = "Truck" }
            };

            var collection = _database.GetCollection<CarBodyTypes>("CarBodyTypes");
            await collection.DeleteManyAsync(FilterDefinition<CarBodyTypes>.Empty);
            await collection.InsertManyAsync(carBodyTypes);
        }

        // Method to run both migrations together
        public async Task InitMigrationAsync()
        {
            await RunProvincesMigrationAsync();
            await RunCarBodyTypesMigrationAsync();
        }
    }
}
