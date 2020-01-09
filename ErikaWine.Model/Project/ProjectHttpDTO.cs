using ErikaWine.Model.Components.DTO;
namespace ErikaWine.Model.Project
{
    public abstract class ProjectHttpDTO : HttpDTO
    {
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
    }
}
