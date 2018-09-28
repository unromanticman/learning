function Main() {
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
    var FinanceList = (function () {
        // var list =
        //      from item in orm.Finances
        //      select item;

        // return list;
    })();

    // 將資料塞到 PDF
    var pdfFile = (function () {
        // var FinanceReportTemplate = System.IO.load("c:\FinanceList.temp");
        // var pdfResult = PDFHelper.bind(FinanceReportTemplate, FinanceList);

        // return pdfResult;
    })();

    // 下載檔案
    (function () {
        // System.Web.HttpResonse.Write("FileDownload", "pdf", pdfFile);
    })();
}