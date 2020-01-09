using ErikaWine.Model.Modules;
namespace ErikaWine.Model.Components
{
    public static partial class Validators
    {
        public static bool Validate(this AddModuleHttpDTO Data)
        {
            Data.IsValidated = true;
            if (string.IsNullOrEmpty(Data.ModuleName))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Module Name Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ModuleDescription))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Module Description Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ModuleErrorPrefix))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Module Error Prefix Cannot Be Empty");
            }
            return Data.IsValidated;
        }
        public static bool Validate(this UpdateModuleHttpDTO Data)
        {
            Data.IsValidated = true;
            if (string.IsNullOrEmpty(Data.ModuleName))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Module Name Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ModuleDescription))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Module Description Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ModuleErrorPrefix))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Module Error Prefix Cannot Be Empty");
            }
            return Data.IsValidated;
        }
    }
}
