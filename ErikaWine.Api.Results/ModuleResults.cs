using ErikaWine.BusinessLogic;
using ErikaWine.Model.Modules;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ErikaWine.Api.Results
{
    public class ModuleResults
    {
        public IErikaWineEngine ErikaEngine { get; set; }
        public ModuleResults(IErikaWineEngine eng)
        {
            if (eng == null)
                throw new ArgumentNullException("Service Is Null : " + typeof(IErikaWineEngine));
            this.ErikaEngine = eng;
        }
        public IActionResult Add(AddModuleHttpDTO data)
        {
            if (ErikaEngine.ModuleService.Add(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Update(UpdateModuleHttpDTO data)
        {
            if (ErikaEngine.ModuleService.Update(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Delete(DeleteModuleHttpDTO data)
        {
            if (ErikaEngine.ModuleService.Delete(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Get(string projectid)
        {
            try
            {
                return new OkObjectResult(ErikaEngine.ErrorService.Get(projectid));
            }
            catch (Exception)
            {
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");

            }
        }
    }
}
