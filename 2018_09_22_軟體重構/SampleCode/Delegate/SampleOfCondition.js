function Main() {
    var cmd = ConfigHelper.getExecuteCommand();

    if (cmd == "Weather") {
        var feeling = 0;
        // feeling = 從氣象局拿天氣資料();

        if(feeling <= -1)
        {
            console.log("我不想上班，不論發生什麼意外都一樣。  (懶");
        }
    }
    else if (cmd == "Traffic") {
        var feeling = 0;
        // feeling = 從交通部拿國道資料();

        if(feeling <= -1)
        {
            console.log("我不想上班，不論發生什麼意外都一樣。  (懶");
        }
    }
}
