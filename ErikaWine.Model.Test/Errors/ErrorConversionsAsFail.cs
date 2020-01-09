using System;
using System.Collections.Generic;
using System.Text;
using ErikaWine.Model.Error;
using ErikaWine.Model.Components;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace ErikaWine.Model.Test
{
    [TestClass]
    public class ErrorConversionsAsFail
    {
        AddErrorHttpDTO Data { get; set; }
        public ErrorConversionsAsFail()
        {
            Data = new AddErrorHttpDTO();
        }
        [TestMethod]
        public void TestConversionAsHasGuid()
        {
            var temp = Data.Convert();
            Assert.IsTrue(temp.ErrorId != Guid.Empty);
        }
    }
}
