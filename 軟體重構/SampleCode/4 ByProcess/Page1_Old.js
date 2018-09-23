function Main() {
    // 從資料庫中讀取收貨單明細清單
    // 讀出來，待會回寫用
    var ReceiveList = (function () {
        // var list =
        //      from detail in orm.ReceiveNoteDetail
        //      select detail;

        // return list;
    })();


    // 取得輸入值，並放到收貨資料中
    var hasDifference = false;

    (function () {
        for (var i = 0; i < ReceiveList.length; i++) {
            var detail = ReceiveList[i];
            var msg = detail.ProductName + " 產品數量: ";
            var input = window.prompt(msg);     // 真實案例絕對不會用跳窗訊息
            var qty = parseInt(input, 10);
            detail.AQty = qty;

            if (qty != detail.pQty)
                hasDifference = true;
        }
    })();


    // 回寫資料庫
    (function () {
        // orm.AddUpdate(ReceiveList);
        // orm.SaveChanges();
    })();


    // 如果有不一致，另外發送警告信給上級
    (function () {
        if (!hasDifference)
            return;

        // System.Web.EmailHelper.Send(
        //     "Manager@SomeHost.com", 
        //     "呼叫呼叫~!，本次收貨發生不一致，請管理者注意");
    })();


    // 產生 email 內容
    var emailContent = (function () {
        // var ReceiveReportTemplate = 
        //      System.IO.load("c:\ReceiveReport.temp");

        // var eMailContent = 
        //      TextHelper.bind(ReceiveReportTemplate, ReceiveList);

        // return eMailContent;
    })();

    // 送出 Mail
    (function () {
        // System.Web.EmailHelper.Send(
        //     ["Manager@SomeHost.com", "Boss@SomeHost.com", "Team - Receive@SomeHost.com"], 
        //     emailContent);
    })();
}