(function Main() {
    // 讀取現在登入者
    var currentUser = (function () {
        // var usr = System.Auth.User.getCurrentUser();
        // return usr;
    })();


    if (currentUser == null || currentUser.Authority != "Admin") {
        console.log("Permisson error. Should be Admin.");
        return;
    }

    // 從資料庫中讀取資料
    var FinanceList = FinanceModule.getFinanceData();
    var FinanceFile = FinanceModule.getFinanceTemplate();

    // 將資料塞到 PDF
    var pdfFile = (function () {
        // var pdfResult = System.Document.PDFHelper.bind(FinanceReportTemplate, FinanceList);
        // return pdfResult;
    })();

    // 匯出檔案
    (function () {
        // HttpHelper.response("FileDownload", "pdf", pdfFile);
    })();
})();


var FinanceModule = {
    /* 讀取財務資料 */
    getFinanceData: function () {
        // var list =
        //      from item in orm.Finances
        //      select item;

        // return list;        
    },

    /* 讀取財務報表範例檔 */
    getFinanceTemplate: function () {
        // var FinanceReportTemplate = System.IO.load("c:\FinanceList.temp");
        // return FinanceReportTemplate;
    }
}