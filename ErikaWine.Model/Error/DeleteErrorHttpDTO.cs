using ErikaWine.Model.Components.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace ErikaWine.Model.Error
{
    public class DeleteErrorHttpDTO : ErrorHttpDTO
    {
        public DeleteErrorHttpDTO() : base()
        {
            this.HttpCrudVerb = HttpCrudVerbs.Delete;   
        }
        public Guid ErrorId { get; set; }
    }
}
