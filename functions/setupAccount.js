const {onCall} = require("firebase-functions/v2/https")
const admin = require("firebase-admin");

const db = require('./databaseCalls');

exports.setupAccount = onCall((request) => {
  const uid = request.auth.uid
  const { firstName, lastName, email, password, number, isEducator } = request.data

  admin.auth().createUser({
    email,
    password
  })
  .then(currentUser => {
    db.logUser(currentUser.uid, `ACTION: Firebase Account Created: ` + `ID: ${currentUser.email}`)

    db.createUser(uid, firstName, lastName, email, number, isEducator)
    .catch(error => {
      db.logUser(currentUser.uid, `ERROR: Database Account Created: ` + `ID: ${uid}: ${error}`)
    });
  })
  .catch(error => {
    db.logUnauth(`ERROR: Firebase Account Created: ` + `Email: ${email}: ${error}`)

    return { isSuccess: false,  errorMessage: error };
  })

  return {
    isSuccess: true
  }
})