using MongoDB.Driver;
using thtaCar.Tests.Helper;

namespace thtaCar.Tests
{
        public abstract class BaseTest
        {
            protected IMongoClient MongoClient { get; }
            protected IMongoDatabase Database { get; }


        protected BaseTest()
            {
            var config = ConfigurationHelper.GetConfiguration();
            var connectionString = config["DatabaseSettings:ConnectionString"];
            var databaseName = config["DatabaseSettings:DatabaseName"];

            MongoClient = new MongoClient(connectionString);
                Database = MongoClient.GetDatabase(databaseName);
            }

            protected void CleanCollection(string collectionName)
            {
                var collection = Database.GetCollection<dynamic>(collectionName);
                collection.DeleteMany(FilterDefinition<dynamic>.Empty);
            }
        }
}
