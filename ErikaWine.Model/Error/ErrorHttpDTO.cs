using ErikaWine.Model.Components.DTO;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
namespace ErikaWine.Model.Error
{
    public abstract class ErrorHttpDTO : HttpDTO
    {
        public int ErrorNumber { get; set; }
        public string ErrorCode { get; set; }
        public string ErroMessage { get; set; }
        public string ErrorDescription { get; set; }
        public Guid? ModuleId { get; set; }
        
    }
}
