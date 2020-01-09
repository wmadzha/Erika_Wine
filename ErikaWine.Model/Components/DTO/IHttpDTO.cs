using System;
using ErikaWine.Model.Components.Enums;
using Microsoft.AspNetCore.Http;
namespace ErikaWine.Model.Components.DTO
{
    public interface IHttpDTO
    {
        Guid UserId { get; set; }
        Guid TransactionRequestId { get; set; }
        string HttpVerb { get; set; }
        HttpCrudVerbs HttpCrudVerb { get; set; }
        void GenerateDTORequest(HttpContext req);
       
    }
}
