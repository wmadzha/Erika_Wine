using Microsoft.AspNetCore.Mvc;
using ErikaWine.Model.Error;
using ErikaWine.BusinessLogic;
using System;
using ErikaWine.Api.Results;
using ErikaWine.Model.Components;
namespace ErikaWine.Api.Controllers
{
    [Route(constants.ContollerPath.NormalPath)]
    [ApiController]
    public class ErrorController : ControllerBase
    {
        private  ErrorResults Result { get; set; }
        public ErrorController(IErikaWineEngine eng)
        {
            if (eng == null)
                throw new ArgumentNullException("Service Is Null : " + typeof(IErikaWineEngine));
            this.Result = new ErrorResults(eng);
        }
        [Route(constants.ContollerPath.Add)]
        [HttpPost]
        public IActionResult Add(AddErrorHttpDTO Data)
        {
            if (Data.Validate())
                return Result.Add(Data);
            else
                return new BadRequestObjectResult(Data.ValidationErrors);
        }
        [Route(constants.ContollerPath.Update)]
        [HttpPost]
        public IActionResult Update(UpdateErrorHttpDTO Data)
        {
            if (Data.Validate())
                return Result.Update(Data);
            else
                return new BadRequestObjectResult(Data.ValidationErrors);
        }
        [Route(constants.ContollerPath.Delete)]
        [HttpPost]
        public IActionResult Delete(DeleteErrorHttpDTO Data)
        {
                return Result.Delete(Data);
        }
        [Route(constants.ContollerPath.Get)]
        [HttpGet]
        public IActionResult Get(string moduleid)
        {
            return Result.Get(moduleid);
        }
    }
}
