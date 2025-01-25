using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Linq;
using thatCar.Domain.Entities;
using thtaCar.Tests.Helper;
using Xunit;

namespace thtaCar.Tests
{
    public class MigrationTests : BaseTest
    {
        private readonly IMongoCollection<Provinces> _provinceCollection;
        private readonly IMongoCollection<CarBodyTypes> _carBodyTypeCollection;
        private readonly Migration _migration;

        public MigrationTests()
        {
         
            _provinceCollection = Database.GetCollection<Provinces>("Provinces");
            _carBodyTypeCollection = Database.GetCollection<CarBodyTypes>("CarBodyTypes");

            var configuration = ConfigurationHelper.GetConfiguration();
            _migration = new Migration(configuration);

            CleanCollection("Provinces");
            CleanCollection("CarBodyTypes");
        }

        [Fact]
        public async Task InitMigration()
        {

            // Act
            await _migration.InitMigrationAsync();

            // Assert Provinces
            var provinces = await _provinceCollection.Find(FilterDefinition<Provinces>.Empty).ToListAsync();
            Assert.Equal(9, provinces.Count);
            Assert.Contains(provinces, p => p.Name == "Gauteng" && p.Abbreviation == "GP");

            // Assert CarBodyTypes
            var carBodyTypes = await _carBodyTypeCollection.Find(FilterDefinition<CarBodyTypes>.Empty).ToListAsync();
            Assert.Equal(8, carBodyTypes.Count);
            Assert.Contains(carBodyTypes, c => c.Name == "SUV");
        }

        [Fact]
        public async Task InitMigration_ShouldRemoveExistingDataAndInsertNew()
        {
            await _provinceCollection.InsertOneAsync(new Provinces { Name = "DummyProvince", Abbreviation = "DP" });
            await _carBodyTypeCollection.InsertOneAsync(new CarBodyTypes { Name = "DummyCarBodyType" });

            // Act
            await _migration.InitMigrationAsync();

            // Assert Provinces
            var provinces = await _provinceCollection.Find(FilterDefinition<Provinces>.Empty).ToListAsync();
            Assert.Equal(9, provinces.Count);
            Assert.DoesNotContain(provinces, p => p.Name == "DummyProvince");

            // Assert CarBodyTypes
            var carBodyTypes = await _carBodyTypeCollection.Find(FilterDefinition<CarBodyTypes>.Empty).ToListAsync();
            Assert.Equal(8, carBodyTypes.Count);
            Assert.DoesNotContain(carBodyTypes, c => c.Name == "DummyCarBodyType");
        }
    }
}
