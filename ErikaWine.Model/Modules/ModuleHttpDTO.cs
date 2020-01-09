using ErikaWine.Model.Components.DTO;
using System;
namespace ErikaWine.Model.Modules
{
    public abstract class ModuleHttpDTO : HttpDTO
    {
        public string ModuleName { get; set; }
        public string ModuleDescription { get; set; }
        public string ModuleErrorPrefix { get; set; }
        public Guid? ProjectId { get; set; }
    }
}
