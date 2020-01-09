using ErikaWine.Model.Components.Enums;
using ErikaWine.Model.Error;
using System;
using System.Collections.Generic;
using System.Text;

namespace ErikaWine.Model.Modules
{
    public class GetModuleHttpDTO : ModuleHttpDTO
    {
        public GetModuleHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Get;
        }
        public Guid ModulesId { get; set; }
    }
}
