using System;
using System.Collections.Generic;
using System.Text;
using ErikaWine.Database;
using ErikaWine.Model.Modules;
using ErikaWine.Model.Components;
using System.Linq;
namespace ErikaWine.BusinessLogic
{
    public class ModuleService : IModuleService
    {
        private readonly ErrorCodeBaseContext _Context;
        public ModuleService(ErrorCodeBaseContext dbCtx)
        {
            this._Context = dbCtx;
        }
        public bool Add(AddModuleHttpDTO Data)
        {
            try
            {
                _Context.Modules.Add(Data.Convert());
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Update(UpdateModuleHttpDTO Data)
        {
            try
            {
                var dbData = _Context.Modules.Where(x => x.ModulesId == Data.ModulesId).FirstOrDefault();
                _Context.Modules.Update(Data.Convert(dbData));
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Delete(DeleteModuleHttpDTO Data)
        {
            try
            {
                var dbData = _Context.Modules.Where(x => x.ModulesId == Data.ModulesId).FirstOrDefault();
                _Context.Modules.Remove(dbData);
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<GetModuleHttpDTO> Get(string projectId)
        {
            try
            {
                return _Context.Modules.Where(x => x.ProjectId == new Guid(projectId)).ToList().Convert();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
