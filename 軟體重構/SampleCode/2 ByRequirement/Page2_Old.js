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
    var ProductList = (function () {
        // var list =
        //      from Prod in orm.Products
        //      select Prod;

        // return list;
    })();

    // 產生 email 內容
    var emailContent = (function () {
        // var ProductReportTemplate = 
        //      System.IO.load("c:\coupon.temp");

        // var eMailContent = 
        //      TextHelper.bind(ProductReportTemplate, ProductList);

        // return eMailContent;
    })();

    // 送出 Mail
    (function () {
        // System.Web.EmailHelper.Send(
        //     "SomeOne@SomeHost.com", 
        //     emailContent);
    })();
}