function Main() {
    // 讀取現在登入者
    var currentUser = MembershipManager.getCurrentUser();

    if (MembershipManager.isAvailable(currentUser, "Admin")) {
        console.log("Permisson error. Should be Admin.");
        return;
    }

    // 從資料庫中讀取資料
    var FinanceList = (function () {
        // var list =
        //      from item in orm.Finances
        //      select item;

        // return list;
    })();

    // 將資料塞到 PDF
    var pdfFile = (function () {
        var FinanceReportTemplate = FileHelper.getFileContent("c:\FinanceList.temp");
        var pdfResult = ReportHelper.bind(FinanceReportTemplate, FinanceList);
        return pdfResult;
    })();

    // 下載檔案
    HttpHelper.response("FileDownload", "pdf", pdfFile);;
}


var MembershipManager = {
    getCurrentUser: function () {
        // var usr = System.Auth.User.getCurrentUser();
        // return usr;
    },

    isAvailable: function (objUser, AuthName) {
        if (objUser == null)
            return false;

        if (objUser.Authority != AuthName)
            return false;

        return true;
    }
}


var FileHelper = {
    getFileContent: function (filePath) {
        // var isExist = System.IO.isExist(filePath);

        // if(!isExist)
        //  return null;

        // var content = System.IO.load(filePath);

        // return content;
    }
}


var ReportHelper = {
    bind: function (txtTemplate, objTemplateData) {
        var result = txtTemplate;

        for (var key in objTemplateData) {
            var result = result.replace("{" + key + "}", objTemplateData);
        }

        // 呼叫外部產生 PDF 的程式
        // result = System.Document.PDFHelper.bind(result);

        return result;
    }
}


var HttpHelper = {
    response: function (txtAction, txtResponseMIME, txtContent) {
        // System.Web.HttpResonse.Write(......);
    }
}