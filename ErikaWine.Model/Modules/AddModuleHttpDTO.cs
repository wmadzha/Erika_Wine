using ErikaWine.Model.Components.Enums;
using System;
namespace ErikaWine.Model.Modules
{
    public class AddModuleHttpDTO : ModuleHttpDTO
    {
        public AddModuleHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Add;
        }
      
    }
}
