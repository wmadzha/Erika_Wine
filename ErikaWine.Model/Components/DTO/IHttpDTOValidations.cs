using System.Collections.Generic;
namespace ErikaWine.Model.Components.DTO
{
    public interface IHttpDTOValidations
    {
        bool IsValidated { get; set; }
        List<string> ValidationErrors { get; set; }
       
    }
}
