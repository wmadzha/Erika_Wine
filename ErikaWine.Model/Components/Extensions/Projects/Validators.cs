using ErikaWine.Model.Project;
namespace ErikaWine.Model.Components
{
    public static partial class Validators
    {
        public static bool Validate(this AddProjectHttpDTO Data)
        {
            Data.IsValidated = true;
            if (string.IsNullOrEmpty(Data.ProjectName))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Project Name Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ProjectDescription))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Project Description Cannot Be Empty");
            }     
            return Data.IsValidated;
        }
        public static bool Validate(this UpdateProjectHttpDTO Data)
        {
            Data.IsValidated = true;
            if (string.IsNullOrEmpty(Data.ProjectName))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Project Name Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ProjectDescription))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Project Description Cannot Be Empty");
            }
            return Data.IsValidated;
        }
    }
}
