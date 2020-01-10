using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using ErikaWine.Database;
using Microsoft.Extensions.Configuration;

namespace ErikaWine.BusinessLogic.Builder
{
    public static class ErikaServiceBuilder
    {
        public static IApplicationBuilder EnsureErikaHappy(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<ErrorCodeBaseContext>();
                context.Database.EnsureCreated();
            }
            return app;
        }
        public static IServiceCollection GetErikasPhoneNumber(this IServiceCollection svc, IConfiguration Configuration, DataStoreType storageType)
        {
            string connection = Configuration.GetConnectionString("erikaconnection");
            switch (storageType)
            {
                case DataStoreType.Oracle:
                    svc.AddDbContext<ErrorCodeBaseContext>(options => options.UseOracle(connection));
                    break;
                case DataStoreType.MicrosoftSQL :
                    svc.AddDbContext<ErrorCodeBaseContext>(options => options.UseSqlServer(connection));
                    break;
                case DataStoreType.SQLLite:
                    svc.AddDbContext<ErrorCodeBaseContext>(options => options.UseSqlite(connection));
                    break;
            }

            return svc;
        }
        public static IServiceCollection AskErikaOut(this IServiceCollection svc, IConfiguration Configuration)
        {
            svc.AddTransient<IErikaWineEngine, ErikaWineEngine>();
            return svc;
        }
        public enum DataStoreType
        {
            MicrosoftSQL,
            SQLLite,
            Oracle,
        }
    }
}
