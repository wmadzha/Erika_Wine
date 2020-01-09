
using ErikaWine.Model.Modules;
using System.Collections.Generic;
namespace ErikaWine.Model.Components
{
    public static partial class Converter
    {
        public static Database.Modules Convert(this AddModuleHttpDTO Data)
        {
            return new Database.Modules()
            {
                ModuleDescription = Data.ModuleDescription,
                ModuleErrorPrefix = Data.ModuleErrorPrefix,
                ModuleName = Data.ModuleName,
                ModulesId = System.Guid.NewGuid(),
                ProjectId = Data.ProjectId,
            };
        }
        public static Database.Modules Convert(this UpdateModuleHttpDTO Data , Database.Modules dbData  )
        {
            dbData.ModuleDescription = Data.ModuleDescription;
            dbData.ModuleErrorPrefix = Data.ModuleErrorPrefix;
            dbData.ModuleName = Data.ModuleName;
            dbData.ModulesId = Data.ModulesId;
            dbData.ProjectId = Data.ProjectId;
            return dbData;
        }
        public static GetModuleHttpDTO Convert(this Database.Modules Data)
        {
            return new GetModuleHttpDTO()
            {
                ModuleDescription = Data.ModuleDescription,
                ModuleName = Data.ModuleName,
                ModuleErrorPrefix = Data.ModuleErrorPrefix,
                ModulesId = Data.ModulesId,
                ProjectId = Data.ProjectId,
            };
        }
        public static List<GetModuleHttpDTO> Convert(this List<Database.Modules> Data)
        {
            List<GetModuleHttpDTO> FinalData = new List<GetModuleHttpDTO>();
            foreach(var a in Data)
            {
                FinalData.Add(a.Convert());
            }
            return FinalData;
        }
    }
}
