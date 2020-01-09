using System;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using ErikaWine.Model.Components.Enums;
namespace ErikaWine.Model.Components.DTO
{
    public abstract class HttpDTO : HttpDTOValidations, IHttpDTO
    {
        public HttpDTO()
        {
            this.ValidationErrors = new System.Collections.Generic.List<string>();
        }
        public Guid UserId { get; set; }
        public Guid TransactionRequestId { get; set; }
        public string HttpVerb { get; set; }
        public HttpCrudVerbs HttpCrudVerb { get; set; }
        public virtual void GenerateDTORequest(HttpContext req)
        {
            var user = req.User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(user))
            this.UserId = new Guid(user);
            this.TransactionRequestId = Guid.NewGuid();
            this.HttpVerb = req.Request.Method;
        }
    }
}
