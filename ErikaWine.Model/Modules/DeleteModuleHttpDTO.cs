using ErikaWine.Model.Components.Enums;
using System;

namespace ErikaWine.Model.Modules
{
    public class DeleteModuleHttpDTO : ModuleHttpDTO
    {
        public DeleteModuleHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Delete;
        }
        public Guid ModulesId { get; set; }
    }
   
}
