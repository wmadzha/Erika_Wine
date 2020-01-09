using System;
using System.Collections.Generic;
using System.Text;
using ErikaWine.Model.Components.Enums;
namespace ErikaWine.Model.Error
{
    public class AddErrorHttpDTO : ErrorHttpDTO
    {
        public AddErrorHttpDTO():base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Add;
        }
    }
}
