using Microsoft.EntityFrameworkCore;
namespace ErikaWine.Database
{
    public partial class ErrorCodeBaseContext : DbContext
    {
        private readonly string ConnectionString;
        public ErrorCodeBaseContext()
        {
            this.ConnectionString = "Data Source=ADZHAZBOOK\\SQLEXPRESS;Initial Catalog=ErrorCodeBase;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            this.Database.EnsureCreated();
        }
        public ErrorCodeBaseContext(DbContextOptions<ErrorCodeBaseContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Error> Error { get; set; }
        public virtual DbSet<Modules> Modules { get; set; }
        public virtual DbSet<Project> Project { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConnectionString);
               
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            EntityBuilder.BuildErrorTable(modelBuilder);
            EntityBuilder.BuildModuleTable(modelBuilder);
            EntityBuilder.BuildProjectTable(modelBuilder);
            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
