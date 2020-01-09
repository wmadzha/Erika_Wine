using ErikaWine.Model.Project;
using System.Collections.Generic;

namespace ErikaWine.BusinessLogic
{
    public interface IProjectService
    {
        bool Add(AddProjectHttpDTO Data);
        bool Update(UpdateProjectHttpDTO Data);
        bool Delete(DeleteProjectHttpDTO Data);
        List<GetProjectHttpDTO> Get();
    }
}
