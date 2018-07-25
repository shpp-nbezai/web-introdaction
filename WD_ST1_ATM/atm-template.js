const ATM = {
  is_auth: false,
  current_user:false,
  current_type:false,

  // all cash of ATM
  cash: 2000,
  // all available users
  users: [
    { number: "0000", pin: "000", debet: 0, type: "admin" }, // EXTENDED
    { number: "0025", pin: "123", debet: 675, type: "user" }
  ],
  //error and log messages
  messages: {
    loginOk: `You login as @@@!`,
    logoutOk: `@@@ login out!`,
    notLogged: "You need to login.",
    expectedUser: "You need enter as User to use this method!",
    expectedAdmin: "You need enter as admin to use this method!",
    otherUser: `@@@ is already logged in!`,
    notValidPass: `You enter not valid password for @@@`,
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
  getNowTime: function(fullVersion) {
    let nowTime = new Date();
    let result;
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    if (fullVersion){
      result = nowTime.getDate().toString().padStart(2, '0') + "/";
      result += nowTime.getMonth().toString().padStart(2, '0') + "/";
      result += nowTime.getFullYear() + "  ";
      result +=  nowTime.toLocaleString("ru", options);
      return result;
    } else {
      return nowTime.toLocaleString("ru", options);
    }
  },
  //write a console log and transaction log
  // parameter @value1
  //                replace "@@@" in messageKey text to the value1
  // parameter @value2
  //                replace "###" in messageKey text to the value2
  writeReport: function(method, messageKey, value1, value2) {
    let str = ATM.messages[messageKey];
    if (value1) {
      str = str.replace("@@@", value1);
    }
    if (value2) {
      str = str.replace("###", value2);
    }
    console.log(this.getNowTime(false) + " / " + str);
    this.transactionLog.push(this.getNowTime(true) + "/" + method + "/" + str);
  },
  isAuth: function(funcName){
    if (!this.is_auth) {
      this.writeReport(funcName, "notLogged");
      return false;
    }
    return true;
  },
  // authorization
  auth: function(number, pin) {
    let funcName = "auth";
    if (this.is_auth) {
      this.writeReport(funcName, "otherUser", this.current_type);
      return;
    }
    this.current_user = this.users.find(item => item.number === number);
    if (this.current_user.pin === pin) {
      this.current_type = this.current_user.type;
      this.is_auth = true;
      this.writeReport(funcName, "loginOk", this.current_user.type);
    } else {
      this.writeReport(funcName, "notValidPass", this.current_user.type);
      this.current_user = false;
    }
  },
  // check current debet
  check: function() {
    const funcName = "check";
    if (!this.isAuth(funcName)) {
      return;
    }
    this.writeReport(funcName,  "debetStatus", this.current_user.type, this.current_user.debet);
  },
  // get cash - available for user only
  getCash: function(amount) {
    const funcName = "getCash";
    if (this.current_type === "admin") {
      this.writeReport(funcName, "expectedUser");
      return;
    }
    if (!Number.isInteger(amount) && amount < 0) {
      this.writeReport(funcName, "inputValidateError");
      return;
    }
    if (!this.isAuth(funcName)) {
      return;
    }
    if (this.current_user.debet < amount) {
      this.writeReport(funcName,  "debetStatus", this.current_user.type, this.current_user.debet);
      this.writeReport(funcName, "notEnoughMoney");
      return;
    }
    if (this.cash < amount) {
      this.writeReport(funcName, "atmEmpty");
      return;
    }
    this.current_user.debet -= amount;
    this.cash -= amount;
    this.writeReport(funcName, "getCash", this.current_user.type, amount);
    this.writeReport(funcName,  "debetStatus", this.current_user.type, this.current_user.debet);
  },
  // load cash - available for user only
  loadCash: function(amount) {
    const funcName = "loadCash";
    if (!this.isAuth(funcName)) {
      return;
    }
    if (this.current_type === "admin") {
      this.writeReport(funcName, "expectedUser");
      return;
    }
    if (!Number.isInteger(amount)) {
      this.writeReport(funcName, "inputValidateError");
      return;
    }
    this.current_user.debet += amount;
    this.cash += amount;
    this.writeReport(funcName, "loadCash", this.current_user.type, amount);
    this.writeReport(funcName,  "debetStatus", this.current_user.type, this.current_user.debet);
  },
  // load cash to ATM - available for admin only - EXTENDED
  load_cash: function(addition) {
    const funcName = "load_Cash";
    if (this.current_type === "user") {
      this.writeReport(funcName, "expectedAdmin");
      return;
    }
    if (!Number.isInteger(addition)) {
      this.writeReport(funcName, "inputValidateError");
      return;
    }
    if (!this.isAuth(funcName)) {
      return;
    }
    this.cash += addition;
    this.writeReport(funcName, "incasation", this.current_user.type, addition);
    this.writeReport(funcName,  "debetATMStatus", this.current_user.type, this.cash);
  },
  // get report about cash actions - available for admin only - EXTENDED
  getReport: function() {
    const funcName = "getReport";
    if (!this.is_auth) {
      this.writeReport(funcName, "notLogged");
      return;
    }
    if (this.current_type === "user") {
      this.writeReport(funcName, "expectedAdmin");
      return;
    }
    this.transactionLog.forEach(item => console.log(item));
  },
  // log out
  logout: function() {
    const funcName = "logout";
    if (!this.isAuth(funcName)) {
      return;
    }
    this.writeReport(funcName, "logoutOk", this.current_user.type);
    this.is_auth = this.current_user = this.current_type = false;
  }
};
