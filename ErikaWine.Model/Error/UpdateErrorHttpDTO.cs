using ErikaWine.Model.Components.DTO;
using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Error
{
    public class UpdateErrorHttpDTO : ErrorHttpDTO
    {
        public UpdateErrorHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Add;
        }
        public Guid ErrorId { get; set; }
    }
}
