const {setGlobalOptions} = require("firebase-functions/v2")
const { initializeApp } = require('firebase-admin/app')

initializeApp()

setGlobalOptions({maxInstances: 10})

const setupAccount = require('./setupAccount')
exports.setupAccount = setupAccount.setupAccount

const updateAccountInfo = require('./updateAccountInfo')
exports.updateAccountInfo = updateAccountInfo.updateAccountInfo