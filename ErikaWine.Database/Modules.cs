using System;
using Microsoft.EntityFrameworkCore;
namespace ErikaWine.Database
{
    public partial class Modules
    {
        public Guid ModulesId { get; set; }
        public string ModuleName { get; set; }
        public string ModuleDescription { get; set; }
        public string ModuleErrorPrefix { get; set; }
        public Guid? ProjectId { get; set; }
    }
    public static partial class EntityBuilder
    {
        public static void BuildModuleTable(ModelBuilder builder)
        {
            builder.Entity<Modules>(entity =>
            {
                entity.Property(e => e.ModulesId).ValueGeneratedNever();

                entity.Property(e => e.ModuleErrorPrefix).HasMaxLength(20);

                entity.Property(e => e.ModuleName).HasMaxLength(255);
            });
        }
    }
}
