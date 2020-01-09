using Microsoft.AspNetCore.Mvc;
using ErikaWine.Model.Project;
using ErikaWine.BusinessLogic;
using System;
using ErikaWine.Api.Results;
using ErikaWine.Model.Components;

namespace ErikaWine.Api.Controllers
{
    [Route(constants.ContollerPath.NormalPath)]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private ProjectResults Result { get; set; }
        public ProjectController(IErikaWineEngine eng)
        {
            if (eng == null)
                throw new ArgumentNullException("Service Is Null : " + typeof(IErikaWineEngine));
            this.Result = new ProjectResults(eng);
        }
        [Route(constants.ContollerPath.Add)]
        [HttpPost]
        public IActionResult Add(AddProjectHttpDTO Data)
        {
            if (Data.Validate())
                return Result.Add(Data);
            else
                return new BadRequestObjectResult(Data.ValidationErrors);
        }
        [Route(constants.ContollerPath.Update)]
        [HttpPost]
        public IActionResult Update(UpdateProjectHttpDTO Data)
        {
            if (Data.Validate())
                return Result.Update(Data);
            else
                return new BadRequestObjectResult(Data.ValidationErrors);
        }
        [Route(constants.ContollerPath.Delete)]
        [HttpPost]
        public IActionResult Delete(DeleteProjectHttpDTO Data)
        {
            return Result.Delete(Data);
        }
        [Route(constants.ContollerPath.Get)]
        [HttpGet]
        public IActionResult Get()
        {
            return Result.Get();
        }
    }
}
