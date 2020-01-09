using Microsoft.AspNetCore.Mvc;
using ErikaWine.Model.Modules;
using ErikaWine.BusinessLogic;
using System;
using ErikaWine.Api.Results;
using ErikaWine.Model.Components;

namespace ErikaWine.Api.Controllers
{
    [Route(constants.ContollerPath.NormalPath)]
    [ApiController]
    public class ModuleController : ControllerBase
    {
        private ModuleResults Result { get; set; }
        public ModuleController(IErikaWineEngine eng)
        {
            if (eng == null)
                throw new ArgumentNullException("Service Is Null : " + typeof(IErikaWineEngine));
            this.Result = new ModuleResults(eng);
        }
        [Route(constants.ContollerPath.Add)]
        [HttpPost]
        public IActionResult Add(AddModuleHttpDTO Data)
        {
            if (Data.Validate())
                return Result.Add(Data);
            else
                return new BadRequestObjectResult(Data.ValidationErrors);
        }
        [Route(constants.ContollerPath.Update)]
        [HttpPost]
        public IActionResult Update(UpdateModuleHttpDTO Data)
        {
            if (Data.Validate())
                return Result.Update(Data);
            else
                return new BadRequestObjectResult(Data.ValidationErrors);
        }
        [Route(constants.ContollerPath.Delete)]
        [HttpPost]
        public IActionResult Delete(DeleteModuleHttpDTO Data)
        {
            return Result.Delete(Data);
        }
        [Route(constants.ContollerPath.Get)]
        [HttpGet]
        public IActionResult Get(string projectid)
        {
            return Result.Get(projectid);
        }
    }
}
