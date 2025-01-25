
using Microsoft.Extensions.Configuration;

namespace thtaCar.Tests.Helper
{
    public class ConfigurationHelper
    {
        public static IConfigurationRoot GetConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory()) // Base path for appsettings.json
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
               // .AddJsonFile("appsettings.Test.json", optional: true, reloadOnChange: true)\
              ; // Optional test-specific settings

            return builder.Build();
        }
    }
}
