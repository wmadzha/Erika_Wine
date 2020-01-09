using ErikaWine.Model.Modules;
using System.Collections.Generic;

namespace ErikaWine.BusinessLogic
{
    public interface IModuleService
    {
        bool Add(AddModuleHttpDTO Data);
        bool Update(UpdateModuleHttpDTO Data);
        bool Delete(DeleteModuleHttpDTO Data);
        List<GetModuleHttpDTO> Get(string moduleId);
    }
}
