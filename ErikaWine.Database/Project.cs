using System;
using Microsoft.EntityFrameworkCore;
namespace ErikaWine.Database
{
    public partial class Project
    {
        public Guid ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
    }
    public static partial class EntityBuilder
    {
        public static void BuildProjectTable(ModelBuilder builder)
        {
            builder.Entity<Project>(entity =>
            {
                entity.Property(e => e.ProjectId).ValueGeneratedNever();

                entity.Property(e => e.ProjectName).HasMaxLength(255);
            });
        }
    }
}
