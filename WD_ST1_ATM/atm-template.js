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
    //transactionLog
    transactionLog: [],
    // authorization
    auth: function(number, pin) {
      if (this.is_auth){
        console.log(`${this.current_type} is already logged in!`);
        return;
      }
      let loginnedUser = this.users.find(item => item.number === number);
      if ( loginnedUser.pin === pin){
              this.current_user = loginnedUser;
              this.current_type = loginnedUser.type;
              this.is_auth = true;
              this.transactionLog.push(`auth: ${this.current_type} ${this.current_user.number} logged`);
              console.log(`You loggin as ${this.current_user.type}!`);
        } else {
              console.log(`You enter not valid password for ${loginnedUser.type}.`);
        }
    },
    // check current debet
    check: function() {
      if(this.is_auth){
        console.log(`You debet is: ${this.current_user.debet} peso :) `);
        this.transactionLog.push('check: ${this.current_user} / user ${this.current_user.number} / debet ${this.current_user.debet}');
      } else {
        console.log(`You need to login.`);
      }
    },
    // get cash - available for user only
    getCash: function(amount) {
      if (this.current_type === "admin"){
        console.log("You need enter as User to use this metod!" );
        return;
      }
      if (!Number.isInteger(amount) && amount < 0){
        console.log("You need enter a number.");
        return;
      }
      if(this.is_auth){
        if (this.current_user.debet < amount){
            console.log(`You don't have enough money! You debet is: ${this.current_user.debet} peso :)`);
            return;
        }
        if (this.cash < amount){
          console.log("There is not enough money in the ATM for this transaction.");
          return;
        }
        this.current_user.debet -= amount;
        this.cash -= amount;
        this.transactionLog.push(`getCash: money taken ${amount} / user  ${this.current_user} / debet ${this.current_user.debet}`);
        console.log(`You get ${amount} peso. You current debet is: ${this.current_user.debet} peso :) `);
      } else {
        console.log(`You need to login.`);
      }
    },
    // load cash - available for user only
    loadCash: function(amount){
      if (this.current_type === "admin"){
        console.log("You need enter as User to use this metod!" );
        return;
      }
      if (!Number.isInteger(amount)){
        console.log("You need enter a number.");
        return;
      }
      if(this.is_auth){
        this.current_user.debet += amount;
        this.transactionLog.push(`loadCash: money add ${amount} / user  ${this.current_user} / debet ${this.current_user.debet}`);
        console.log(`You load ${amount} peso. You current debet is: ${this.current_user.debet} peso :) `);
      } else {
        console.log(`You need to login.`);
      }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
      if (this.current_type === "user"){
        console.log("You need enter as admin to use this metod!" );
        return;
      }
      if (!Number.isInteger(addition)){
        console.log("You need enter a number.");
        return;
      }
      if(this.is_auth){
        this.cash += addition;
        this.transactionLog.push(`Incasation: money load ${addition} / user  ${this.current_user} / debet ${this.current_user.debet}`);
        console.log(`You load ${addition} peso to ATM. You current debet is: ${this.cash} peso :) `);
      } else {
        console.log(`You need to login.`);
      }

    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
      if (this.current_type === "user"){
        console.log("You need enter as admin to use this metod!" );
        return;
      }
      console.log(this.transactionLog);
    },
    // log out
    logout: function() {
      if (this.is_auth){
        this.is_auth = false;
        this.current_user = false;
        this.current_type = false;
        this.transactionLog.push(`logout: ${this.current_type} ${this.current_user.number} logout...`);
        console.log("You logout.");
      } else {
        console.log("You need login first.");
      }
    }
};
