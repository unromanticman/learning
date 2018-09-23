
(function() {
    Button1_Click_Event();
})();


function Button1_Click_Event() {
    if(!window.confirm("確定要這麼做嗎?"))
        return;

    var cnt = 0;
    for(var i = 1 ; i <= 100; i++) {
        cnt += i;
    }

    console.log("Button1 Click Done;");
}

