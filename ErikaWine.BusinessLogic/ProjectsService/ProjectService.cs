using System;
using System.Collections.Generic;
using ErikaWine.Database;
using ErikaWine.Model.Project;
using ErikaWine.Model.Components;
using System.Linq;
namespace ErikaWine.BusinessLogic
{
    public class ProjectService : IProjectService
    {
        private readonly ErrorCodeBaseContext _Context;
        public ProjectService(ErrorCodeBaseContext dbCtx)
        {
            this._Context = dbCtx;
        }

        public bool Add(AddProjectHttpDTO Data)
        {
            try
            {
                _Context.Project.Add(Data.Convert());
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Update(UpdateProjectHttpDTO Data)
        {
            try
            {
                var dbData = _Context.Project.Where(x => x.ProjectId == Data.ProjectId).FirstOrDefault();
                _Context.Project.Update(Data.Convert(dbData));
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool Delete(DeleteProjectHttpDTO Data)
        {
            try
            {
                var dbData = _Context.Project.Where(x => x.ProjectId == Data.ProjectId).FirstOrDefault();
                var dbModule = _Context.Modules.Where(x => x.ProjectId == Data.ProjectId).ToList();
                var dbError = _Context.Error.Where(x => dbModule.Any(y => y.ModulesId == x.ModuleId)).ToList();
                _Context.Project.Remove(dbData);
                _Context.Modules.RemoveRange(dbModule);
                _Context.Error.RemoveRange(dbError);
                _Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<GetProjectHttpDTO> Get()
        {
            try
            {
                return _Context.Project.ToList().Convert();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
