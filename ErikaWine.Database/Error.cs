using System;
using Microsoft.EntityFrameworkCore;
namespace ErikaWine.Database
{
    public partial class Error
    {
        public Guid ErrorId { get; set; }
        public int ErrorNumber { get; set; }
        public string ErrorCode { get; set; }
        public string ErroMessage { get; set; }
        public string ErrorDescription { get; set; }
        public Guid? ModuleId { get; set; }
    }
    public static partial class EntityBuilder
    {
        public static void BuildErrorTable(ModelBuilder builder)
        {
            builder.Entity<Error>(entity =>
            {
                entity.Property(e => e.ErrorId).ValueGeneratedNever();

                entity.Property(e => e.ErroMessage).HasMaxLength(200);

                entity.Property(e => e.ErrorCode).HasMaxLength(20);

                entity.Property(e => e.ErrorNumber).ValueGeneratedOnAdd();
            });
        }
    }
}
