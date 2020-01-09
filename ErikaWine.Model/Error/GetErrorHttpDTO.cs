using ErikaWine.Model.Components.DTO;
using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Error
{
    public class GetErrorHttpDTO : ErrorHttpDTO
    {
        public GetErrorHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Delete;
        }
        public Guid ErrorId { get; set; }
    }
}
