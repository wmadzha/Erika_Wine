using ErikaWine.Model.Error;
using System;
using System.Collections.Generic;
using System.Text;

namespace ErikaWine.BusinessLogic
{
    public interface IErrorService
    {
        bool Add(AddErrorHttpDTO Data);
        bool Update(UpdateErrorHttpDTO Data);
        bool Delete(DeleteErrorHttpDTO Data);
        List<GetErrorHttpDTO> Get(string moduleId);
    }
}
