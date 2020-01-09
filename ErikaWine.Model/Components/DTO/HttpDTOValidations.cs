using System;
using System.Collections.Generic;
using System.Text;

namespace ErikaWine.Model.Components.DTO
{
    public abstract class HttpDTOValidations : IHttpDTOValidations
    {
        public bool IsValidated { get; set; }
        public List<string> ValidationErrors { get; set; }
        public HttpDTOValidations()
        {
            this.IsValidated = false;
            this.ValidationErrors = new List<string>();
        }
       
    }
}
