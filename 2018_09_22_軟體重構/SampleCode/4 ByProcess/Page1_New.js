function Main() {
    // 從資料庫中讀取收貨單明細清單
    // 讀出來，待會回寫用
    var ReceiveList = ReceivingModule.getReceiveList();


    // 取得輸入值，並放到收貨資料中
    var inputResult = UIModule.getInputs(ReceiveList);


    // 收貨結果回寫資料庫
    ReceivingModule.updateReceiveList(inputResult);


    // 發出警訊
    AlarmModule.send(inputResult)
}


var ReceivingModule = {
    getReceiveList: function() {
        // var list =
        //      from detail in orm.ReceiveNoteDetail
        //      select detail;

        // return list;
    },

    updateReceiveList: function(ReceiveList) {
        // orm.AddUpdate(ReceiveList);
        // orm.SaveChanges();
    }
};


var UIModule = {
    getInputs: function(ReceiveList) {
        // 取得輸入值，並放到收貨資料中
        var hasDifference = false;

        for (var i = 0; i < ReceiveList.length; i++) {
            var detail = ReceiveList[i];
            var msg = detail.ProductName + " 產品數量: ";
            var input = window.prompt(msg);     // 真實案例絕對不會用跳窗訊息
            var qty = parseInt(input, 10);
            detail.AQty = qty;

            if (qty != detail.pQty)
                hasDifference = true;
        }

        var result = 
            {
                "hasDifference": hasDifference,
                "ReceiveList": ReceiveList
            };

        return result;
    }
};


var AlarmModule = {
    send: function(inputResult) {
        // 如果沒有不一致，不發信
        if (!inputResult.hasDifference)
            return;

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
};