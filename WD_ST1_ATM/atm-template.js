const ATM = {
    is_auth: false,
    current_user:false,
    current_type:false,

    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],
    //error and log messages
    messages: {
      logginOk: `You loggin as @@@!`,
      logoutOk: `@@@ loggin out!`,
      logginError_needLogin: "You need to login.",
      loggin_logout: "You logout.",
      logginError_expectedUser: "You need enter as User to use this metod!",
      logginError_expectedAdmin: "You need enter as admin to use this metod!",
      logginError_otherUser: `@@@ is already logged in!`,
      logginError_notValidPass: `You enter not valid password for @@@`,
      inputValidateError: "You need enter a number.",
      debetStatus: `@@@ debet is: ### peso :) `,
      debetATMStatus: `@@@ debet ATM is: ### peso :) `,
      notEnoughMoney: "You don't have enough money!",
      atmEmpty: "There is not enough money in the ATM for this transaction.",
      getCash: `@@@ get ### peso.`,
      loadCash: `@@@ load ### peso.`,
      incasation: `@@@ load ### peso to ATM.`


    },
    //transactionLog
    transactionLog: [],
    //Get format date and time
    // parameter @fullVersion
    //                true - return date =  Jun 06 2018 18:37:26
    //                false - return time = 18:37:26
    getNowTime: function( fullVersion ) {
      let nowTime = new Date();
      if ( fullVersion ) {
          return nowTime.toString().slice( 4, 24 );
      } else {
          return nowTime.toString().slice( 16, 24 );
      }
    },
    //write a console log and transaction log
    // parameter @value1
    //                replace "@@@" in messageKey text to the value1
    // parameter @value2
    //                replace "###" in messageKey text to the value2
    writeReport: function( metod, messageKey, value1, value2 ) {
      let str = ATM.messages[ messageKey ];
      if ( value1 !== undefined ){
          str = str.replace( "@@@", value1 );
      }
      if ( value2 !== undefined ) {
          str = str.replace( "###", value2 );
      }
      console.log( this.getNowTime(false) + " / " + str );
      this.transactionLog.push( this.getNowTime(true) + "/" + metod + "/" + str);
    },
    // authorization
    auth: function( number, pin ) {
      if ( this.is_auth ){
        this.writeReport( "auth", "logginError_otherUser", this.current_type );
        return;
      }
      this.current_user = this.users.find( item => item.number === number );
      if ( this.current_user.pin === pin ) {
          this.current_type = this.current_user.type;
          this.is_auth = true;
          this.writeReport( "auth", "logginOk", this.current_user.type );
        } else {
          this.writeReport( "auth", "logginError_notValidPass", this.current_user.type );
          this.current_user = false;
        }
    },
    // check current debet
    check: function() {
      if ( this.is_auth ) {
        this.writeReport( "check",  "debetStatus", this.current_user.type, this.current_user.debet );
      } else {
        this.writeReport( "check", "logginError_needLogin" );
      }
    },
    // get cash - available for user only
    getCash: function( amount ) {
      if (this.current_type === "admin"){
        this.writeReport( "getCash", "logginError_expectedUser" );
        return;
      }
      if ( !Number.isInteger( amount ) && amount < 0 ) {
        this.writeReport( "getCash", "inputValidateError" );
        return;
      }
      if ( !this.is_auth ) {
        this.writeReport( "getCash", "logginError_needLogin" );
        return;
      }
      if ( this.current_user.debet < amount ) {
        this.writeReport( "getCash",  "debetStatus", this.current_user.type, this.current_user.debet );
        this.writeReport( "getCash", "notEnoughMoney" );
        return;
      }
      if ( this.cash < amount ) {
        this.writeReport( "getCash", "atmEmpty" );
        return;
      }
      this.current_user.debet -= amount;
      this.cash -= amount;
      this.writeReport( "getCash", "getCash", this.current_user.type, amount );
      this.writeReport( "getCash",  "debetStatus", this.current_user.type, this.current_user.debet );
    },
    // load cash - available for user only
    loadCash: function( amount ) {
      if ( this.current_type === "admin" ) {
        this.writeReport( "loadCash", "logginError_expectedUser" );
        return;
      }
      if ( !Number.isInteger( amount )) {
        this.writeReport( "loadCash", "inputValidateError" );
        return;
      }
      if ( this.is_auth ) {
        this.current_user.debet += amount;
        this.cash += amount;
        this.writeReport( "loadCash", "loadCash", this.current_user.type, amount );
        this.writeReport( "loadCash",  "debetStatus", this.current_user.type, this.current_user.debet );
      } else {
        this.writeReport( "loadCash", "logginError_needLogin" );
      }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function( addition ) {
      if ( this.current_type === "user" ) {
        this.writeReport( "load_Cash", "logginError_expectedAdmin" );
        return;
      }
      if ( !Number.isInteger( addition )) {
        this.writeReport( "load_Cash", "inputValidateError" );
        return;
      }
      if ( !this.is_auth ) {
        this.writeReport( "load_Cash", "logginError_needLogin" );
      }
      this.cash += addition;
      this.writeReport( "load_Cash", "incasation", this.current_user.type, addition );
      this.writeReport( "load_Cash",  "debetATMStatus", this.current_user.type, this.cash );
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
      if ( this.current_type === "user" ) {
        this.writeReport( "getReport", "logginError_expectedAdmin" );
        return;
      }
      this.transactionLog.map( item => console.log( item ));
    },
    // log out
    logout: function() {
      if ( !this.is_auth ) {
        this.writeReport( "logout", "logginError_needLogin" );
        return;
      }
      this.writeReport( "logout", "logoutOk", this.current_user.type );
      this.is_auth = false;
      this.current_user = false;
      this.current_type = false;
    }
};
