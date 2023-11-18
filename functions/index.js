const { setGlobalOptions } = require("firebase-functions/v2")
var serviceAccount = require("./serviceAccountKey.json")
var admin = require("firebase-admin")

admin.initializeApp(
    {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vulcan-v2-dev-default-rtdb.firebaseio.com",
  storageBucket:"gs://vulcan-v2-dev.appspot.com"
}
)


setGlobalOptions({ maxInstances: 10 })

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
exports.emailverify = emailVerifyToggle.emailVerifyToggle

const updateCourseObjectives = require('./updateCourseObjectives')
exports.updatecourseobjectives = updateCourseObjectives.updateCourseObjectives

const updateCategoryStep = require('./updateCategoryStep')
exports.updatecategorystep = updateCategoryStep.updateCategoryStep

const updateCurriculum = require('./updateCurriculum')
exports.updatecurriculum = updateCurriculum.updateCurriculum