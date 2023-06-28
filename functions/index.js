const {setGlobalOptions} = require("firebase-functions/v2");

setGlobalOptions({maxInstances: 10});


const setupAccount = require('./setupAccount');
exports.setupAccount = setupAccount.setupAccount;