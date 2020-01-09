using ErikaWine.BusinessLogic;
using ErikaWine.Model.Error;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ErikaWine.Api.Results
{
    public class ErrorResults
    {
        public IErikaWineEngine ErikaEngine { get; set; }
        public ErrorResults(IErikaWineEngine eng)
        {
            if (eng == null)
                throw new ArgumentNullException("Service Is Null : " + typeof(IErikaWineEngine));
            this.ErikaEngine = eng;
        }

        public IActionResult Add(AddErrorHttpDTO data)
        {
            if (ErikaEngine.ErrorService.Add(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Update(UpdateErrorHttpDTO data)
        {
            if (ErikaEngine.ErrorService.Update(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Delete(DeleteErrorHttpDTO data)
        {
            if (ErikaEngine.ErrorService.Delete(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Get(string moduleId)
        {
            try
            {
                return new OkObjectResult(ErikaEngine.ErrorService.Get(moduleId));
            }
            catch (Exception)
            {
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");

            }               
        }
    }
}
