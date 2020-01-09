using System;
using System.Collections.Generic;
using System.Text;

namespace ErikaWine.BusinessLogic
{
    public interface IErikaWineEngine
    {
        IErrorService ErrorService { get; set; }
        IModuleService ModuleService { get; set; }
        IProjectService ProjectService { get; set; }
    }
}
