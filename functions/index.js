const {setGlobalOptions} = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp()
setGlobalOptions({maxInstances: 10});


const setupAccount = require('./setupAccount');
exports.setupAccount = setupAccount.setupAccount;