using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Project
{
    public class UpdateProjectHttpDTO : ProjectHttpDTO
    {
        public UpdateProjectHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Delete;
        }
        public Guid ProjectId { get; set; }
    }
}
