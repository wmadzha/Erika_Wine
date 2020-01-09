using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Project
{
    public class GetProjectHttpDTO : ProjectHttpDTO
    {
        public GetProjectHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Delete;
        }
        public Guid ProjectId { get; set; }
    }
}
