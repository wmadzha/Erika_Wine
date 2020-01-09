using ErikaWine.Model.Project;
using System;
using System.Collections.Generic;
namespace ErikaWine.Model.Components
{
    public static partial class Converter
    {
        public static Database.Project Convert(this AddProjectHttpDTO Data)
        {
            return new Database.Project()
            {
                ProjectDescription = Data.ProjectDescription,
                ProjectId = Guid.NewGuid(),
                ProjectName = Data.ProjectName,
            };
        }
        public static Database.Project Convert(this UpdateProjectHttpDTO Data , Database.Project dbData)
        {
            dbData.ProjectDescription = Data.ProjectDescription;
            dbData.ProjectName = Data.ProjectName;
            return dbData;
        }
        public static GetProjectHttpDTO Convert(this Database.Project Data)
        {
            return new GetProjectHttpDTO()
            {
                ProjectDescription = Data.ProjectDescription,
                ProjectName = Data.ProjectName,
            };
        }
        public static List<GetProjectHttpDTO> Convert(this List<Database.Project> Data)
        {
            List<GetProjectHttpDTO> FinalData = new List<GetProjectHttpDTO>();
            foreach(var a in Data)
            {
                FinalData.Add(a.Convert());
            }
            return FinalData;
        }
    }
}
