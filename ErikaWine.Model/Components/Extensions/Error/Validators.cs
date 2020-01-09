using ErikaWine.Model.Error;
using System;
using System.Collections.Generic;
using System.Text;

namespace ErikaWine.Model.Components
{
    public static partial class Validators
    {
        // Add Validators

        public static bool Validate(this AddErrorHttpDTO Data)
        {
            Data.IsValidated = true;
            // Check If Not Empty
            if(string.IsNullOrEmpty(Data.ErroMessage))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Error Message Cannot Be Empty");
            }
             if (string.IsNullOrEmpty(Data.ErrorCode))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Error Code Cannot Be Empty");
            }
             if (string.IsNullOrEmpty(Data.ErrorDescription))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Error Code Description Cannot Be Empty");
            }
            return Data.IsValidated;
        }

        // Update Validators

        public static bool Validate(this UpdateErrorHttpDTO Data)
        {
            Data.IsValidated = true;
            // Check If Not Empty
            if (string.IsNullOrEmpty(Data.ErroMessage))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Error Message Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ErrorCode))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Error Code Cannot Be Empty");
            }
            if (string.IsNullOrEmpty(Data.ErrorDescription))
            {
                Data.IsValidated = false;
                Data.ValidationErrors.Add("Error Code Description Cannot Be Empty");
            }
            return Data.IsValidated;
        }
    }
}
