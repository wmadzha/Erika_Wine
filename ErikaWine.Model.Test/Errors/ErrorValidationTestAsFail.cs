using Microsoft.VisualStudio.TestTools.UnitTesting;
using ErikaWine.Model.Error;
using ErikaWine.Model.Components;
namespace ErikaWine.Model.Test
{
    [TestClass]
    public class ErrorValidationTestAsFail
    {
        AddErrorHttpDTO Data { get; set; }
        public ErrorValidationTestAsFail()
        {
            Data = new AddErrorHttpDTO();
            Data.Validate();
            Data.ValidationErrors.Add("Hello");
        }
        [TestMethod]
        public void CheckDTOObjectIsFailValidation()
        {
            Assert.IsFalse(Data.IsValidated);
        }
        [TestMethod]
        public void CheckErrorCodeEmpty()
        {
            var error = Data.ValidationErrors.Find(x => x == "Error Code Cannot Be Empty");
            Assert.IsNotNull(error);
        }
        [TestMethod]
        public void CheckErrorMessageEmpty()
        {
            var error = Data.ValidationErrors.Find(x => x == "Error Message Cannot Be Empty");
            Assert.IsNotNull(error);
        }
        [TestMethod]
        public void CheckErrorDescriptionEmpty()
        {
            var error = Data.ValidationErrors.Find(x => x == "Error Code Description Cannot Be Empty");
            Assert.IsNotNull(error);
        }
    }
}
