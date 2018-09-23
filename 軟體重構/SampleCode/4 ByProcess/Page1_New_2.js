function Main() {
    // 這裡應該讀 CONFIG
    var processList = [
        actions.process1, 
        actions.process2, 
        actions.process3, 
        actions.process4
    ];


    // rock'n roll
    for(var i = 0; i < 4; i++) {
        processList[i]();
    }
}

var actions = {
    tempDataHelper: {
        //valueTemp: {},

        set: function (txtKey, objVal) {
            //this.valueTemp[txtKey] = objVal;
        },

        get: function (txtKey) {
            //return this.valueTemp[txtKey];
        }
    },

    process1: function () {
        var receiveList = ReceivingModule.getReceiveList();

        this.tempDataHelper.set("SourceReceiveList", receiveList());
    },

    process2: function () {
        var SourceReceiveList = this.tempDataHelper.get("SourceReceiveList");

        var inputResult = UIModule.getInputs(SourceReceiveList);

        this.tempDataHelper.set("UIInputResult", inputResult);
    },

    process3: function () {
        var UIInputResult = this.tempDataHelper.get("UIInputResult");

        ReceivingModule.updateReceiveList(UIInputResult);
    },

    process4: function () {
        var UIInputResult = this.tempDataHelper.get("UIInputResult");

        AlarmModule.send(inputResult)
    }
}


var ReceivingModule = {
    getReceiveList: function () {
        // var list =
        //      from detail in orm.ReceiveNoteDetail
        //      select detail;

        // return list;
    },

    updateReceiveList: function (ReceiveList) {
        // orm.AddUpdate(ReceiveList);
        // orm.SaveChanges();
    }
};


var UIModule = {
    getInputs: function (ReceiveList) {
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
    send: function (inputResult) {
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