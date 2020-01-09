using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Project
{
    public class DeleteProjectHttpDTO : ProjectHttpDTO
    {
        public DeleteProjectHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Delete;
        }
        public Guid ProjectId { get; set; }
    }
}
