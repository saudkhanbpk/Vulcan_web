const { onCall } = require("firebase-functions/v2/https")

const db = admin.database()
const dbCalls = require('./databaseCalls')

exports.setupAccount = onCall((request) => {
  var isSuccess = true
  var errorMessage = null
  const uid = request.auth.uid
  const email = request.auth.token.email
  const { firstName, lastName, number, isEducator } = request.data

  db.logUser(currentUser.uid, `ACTION: Firebase Account Created: ` + `ID: ${currentUser.email}`)

  db.ref(`users`).child(uid).update({
    "first_name": firstName,
    "last_name": lastName,
    "email": email,
    "email_verified": false,
    "number": number,
    "is_educator": isEducator,
    "account_active": true,
    "created": Date.now()
  }).catch(error => {
      dbCalls.logUser("ERROR: ACCOUNT INFO ERROR" + `ID: ${uid}: ${error}`)
      isSuccess = false
      errorMessage = "Account Error"
  });

  return {isSuccess: isSuccess, errorMessage: errorMessage}
})