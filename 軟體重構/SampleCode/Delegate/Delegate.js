
(function () {
    var event1 = Button1_Click_Event;

    SimulateButtonClick(event1, "Button1 Event");
})();


function SimulateButtonClick(funcExecute, MethodName) {
    if (!window.confirm("確定要這麼做嗎?"))
        return;

    funcExecute();

    console.log(MethodName + " Done;");
}


function Button1_Click_Event() {
    var cnt = 0;
    for (var i = 1; i <= 100; i++) {
        cnt += i;
    }
}

