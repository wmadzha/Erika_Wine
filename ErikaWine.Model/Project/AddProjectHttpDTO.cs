using ErikaWine.Model.Components.Enums;
namespace ErikaWine.Model.Project
{
    public class AddProjectHttpDTO : ProjectHttpDTO
    {
        public AddProjectHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Add;
        }
    }
}
