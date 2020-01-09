using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Modules
{
    public class UpdateModuleHttpDTO : ModuleHttpDTO
    {
        public UpdateModuleHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Add;
        }
        public Guid ModulesId { get; set; }
    }
}
