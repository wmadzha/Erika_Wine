using Microsoft.Extensions.Configuration;
using ErikaWine.Database;
namespace ErikaWine.BusinessLogic
{
    public class ErikaWineEngine : IErikaWineEngine
    {
        private readonly ErrorCodeBaseContext _Context;
        private readonly IConfiguration _Congfig;
        public IErrorService ErrorService { get; set; }    
        public IModuleService ModuleService { get; set; }
        public IProjectService ProjectService { get; set; }
        public ErikaWineEngine(ErrorCodeBaseContext Context)
        {
            _Context = Context;
            this.ErrorService = new ErrorService(_Context);
            this.ModuleService = new ModuleService(_Context);
            this.ProjectService = new ProjectService(_Context);
        }
        public ErikaWineEngine(ErrorCodeBaseContext Context, IConfiguration Config)
            :this(Context)
        {
            _Congfig = Config;
        }
    }
}
