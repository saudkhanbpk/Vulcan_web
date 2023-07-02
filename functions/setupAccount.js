const {onCall} = require("firebase-functions/v2/https")
const admin = require("firebase-admin");

const db = require('./databaseCalls');

exports.setupAccount = onCall((request) => {
  const uid = request.auth.uid
  const { firstName, lastName, email, password, number, isEducator } = request.data

  db.logUser(currentUser.uid, `ACTION: Firebase Account Created: ` + `ID: ${currentUser.email}`)

  db.createUser(uid, firstName, lastName, email, number, isEducator)
  .catch(error => {
    db.logUser(currentUser.uid, `ERROR: Database Account Created: ` + `ID: ${uid}: ${error}`)
  });
})