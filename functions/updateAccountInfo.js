const { onCall } = require("firebase-functions/v2/https")

const db = admin.database()
const dbCalls = require('./databaseCalls')

exports.updateAccountInfo = onCall((request) => {
  var isSuccess = true
  var errorMessage = null
  const uid = request.auth.uid
  const email = request.auth.token.email
  const { firstName, lastName, number, isEducator } = request.data

    try {

        if (firstName) {
            db.ref(`users`).child(uid).update({
                "first_name": firstName
            })
        }

        if (lastName) {
            db.ref(`users`).child(uid).update({
                "last_name": lastName
            })
        }

        if (number) {
            db.ref(`users`).child(uid).update({
                "number": number
            })
        }

        if (isEducator) {
            db.ref(`users`).child(uid).update({
                "is_educator": isEducator
            })
        }

    } catch(error) {
        dbCalls.logUser("ERROR: Update Account: " + error)
        isSuccess = false
        errorMessage = "Account Update Error"
    }

  return {isSuccess: isSuccess, errorMessage: errorMessage}
})