using System;
using System.Collections.Generic;
using System.Text;
using ErikaWine.Database;
using ErikaWine.Model.Error;

namespace ErikaWine.Model.Components
{
    public static partial class Converter
    {
        public static Database.Error Convert(this AddErrorHttpDTO Data)
        {
            return new Database.Error()
            {
                ErroMessage = Data.ErroMessage,
                ErrorCode = Data.ErrorCode,
                ErrorDescription = Data.ErrorDescription,
                ErrorId = Guid.NewGuid(),
                ErrorNumber = Data.ErrorNumber,
                ModuleId = Data.ModuleId,
            };
        }
        public static Database.Error Convert(this UpdateErrorHttpDTO Data, Database.Error dbData)
        {
            dbData.ErroMessage = Data.ErroMessage;
            dbData.ErrorCode = Data.ErrorCode;
            dbData.ErrorDescription = Data.ErrorDescription;
            dbData.ErrorNumber = Data.ErrorNumber;
            return dbData;
        }

        public static GetErrorHttpDTO Convert(this Database.Error Data)
        {
            return new GetErrorHttpDTO()
            {
                ErrorId = Data.ErrorId,
                ErroMessage = Data.ErroMessage,
                ErrorCode = Data.ErrorCode,
                ErrorDescription = Data.ErrorDescription,
                ErrorNumber = Data.ErrorNumber,
            };
        }
        public static List<GetErrorHttpDTO> Convert(this List<Database.Error> Data)
        {
            List<GetErrorHttpDTO> FinalData = new List<GetErrorHttpDTO>();
            foreach(var a in Data)
            {
                FinalData.Add(a.Convert());
            }
            return FinalData;
        }

    }
}
