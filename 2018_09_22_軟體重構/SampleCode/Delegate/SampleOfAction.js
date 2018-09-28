function Main() {
    var cmd = ConfigHelper.getExecuteCommand();
    var user = MembershipManager.getCurrentUser();

    if (cmd == "OpenDoor") {
        if (user != null && user.isPaid) {
            // 這裡是一次性命令
            //System.IoT.Door.Open();
        }
    }
    else if (cmd == "StopFire") {
        if (user == null) {
            // 這裡是不知道要執行多久的命令
            // var co2Ext = System.IoT.CO2_Extinguisher;

            // co2Ext.Connection();

            // while(detector == true)
            // {
            //      co2Ext.Shout();
            //      System.Thread.CurrentThread.Sleep(100);
            // }

            // co2Ext.Close();
        }
    }
}


var objOfActions = {
    OpenDoor: function(){
        alert("this is Open Door");
    },
    StopFire: function() {
        alert("this is StopFire");
    }
}

var ConfigHelper = {
    getExecuteCommand: function () {
        //return System.IO.load("c:\DoWhat.config");
        return "OpenDoor";
    }
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
