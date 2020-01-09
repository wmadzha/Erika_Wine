using System;
using System.Collections.Generic;
using ErikaWine.Database;
using ErikaWine.Model.Error;
using ErikaWine.Model.Components;
using System.Linq;
namespace ErikaWine.BusinessLogic
{
    public class ErrorService : IErrorService
    {
        private readonly ErrorCodeBaseContext _Context;
        public ErrorService(ErrorCodeBaseContext dbCtx)
        {
            this._Context = dbCtx;
        }
        public bool Add(AddErrorHttpDTO Data)
        {
            try
            {
                _Context.Error.Add(Data.Convert());
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Update(UpdateErrorHttpDTO Data)
        {
            try
            {
                var dbData = _Context.Error.Where(x => x.ErrorId == Data.ErrorId).FirstOrDefault();
                _Context.Error.Update(Data.Convert(dbData));
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Delete(DeleteErrorHttpDTO Data)
        {
            try
            {
                var dbData = _Context.Error.Where(x => x.ErrorId == Data.ErrorId).FirstOrDefault();
                _Context.Error.Remove(dbData);
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<GetErrorHttpDTO> Get(string moduleId)
        {
            try
            {
               return _Context.Error.Where(x => x.ModuleId == new Guid(moduleId)).ToList().Convert();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
