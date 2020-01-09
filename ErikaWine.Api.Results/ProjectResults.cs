using ErikaWine.BusinessLogic;
using ErikaWine.Model.Project;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ErikaWine.Api.Results
{
    public class ProjectResults
    {
        public IErikaWineEngine ErikaEngine { get; set; }
        public ProjectResults(IErikaWineEngine eng)
        {
            if (eng == null)
                throw new ArgumentNullException("Service Is Null : " + typeof(IErikaWineEngine));
            this.ErikaEngine = eng;
        }
        public IActionResult Add(AddProjectHttpDTO data)
        {
            if (ErikaEngine.ProjectService.Add(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Update(UpdateProjectHttpDTO data)
        {
            if (ErikaEngine.ProjectService.Update(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Delete(DeleteProjectHttpDTO data)
        {
            if (ErikaEngine.ProjectService.Delete(data))
                return new OkObjectResult(true);
            else
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
        }
        public IActionResult Get()
        {
            try
            {
                return new OkObjectResult(ErikaEngine.ProjectService.Get());
            }
            catch (Exception)
            {
                return new ConflictObjectResult("Opps Looks Like There Is A Problem");
            }
        }
    }
}
