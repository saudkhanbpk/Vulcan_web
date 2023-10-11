const { setGlobalOptions } = require("firebase-functions/v2")
var serviceAccount = require("./serviceAccountKey.json")
var admin = require("firebase-admin")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vulcan-v2-dev-default-rtdb.firebaseio.com"
})

setGlobalOptions({maxInstances: 10})

const setupAccount = require('./setupAccount')
exports.createaccount = setupAccount.setupAccount

const updateAccountInfo = require('./updateAccountInfo')
exports.updateaccount = updateAccountInfo.updateAccountInfo

const updateExperienceStep = require('./updateExperienceStep')
exports.updateexperiencestep = updateExperienceStep.updateExperienceStep

const updateReachStep = require('./updateReachStep')
exports.updatereachstep = updateReachStep.updateReachStep

const updateEducatorProfile = require('./updateEducatorProfile')
exports.updateeducatorprofile = updateEducatorProfile.updateEducatorProfile

const emailVerifyToggle = require('./emailVerifyToggle')
exports.emailVerify = emailVerifyToggle.emailVerifyToggle
