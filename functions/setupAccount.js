// const { onCall } = require("firebase-functions/v2/https")
// const { getDatabase } = require('firebase-admin/database')

// const db = getDatabase()
// const dbCalls = require('./databaseCalls')

// exports.setupAccount = onCall((request) => {
//   var isSuccess = true
//   var errorMessage = null
//   const uid = request.auth.uid
//   const email = request.auth.token.email
//   const { firstName, lastName, number, isEducator } = request.data

//   db.logUser(currentUser.uid, `ACTION: Firebase Account Created: ` + `ID: ${currentUser.email}`)

//   db.ref(`users`).child(uid).update({
//     "account_active": true,
//     "created": Date.now(),
//     "email_verified": false,
//     "is_educator": isEducator
//   })
//   .then(
//     db.ref(`users`).child(uid).child("profile").update({
//       "first_name": firstName,
//       "last_name": lastName,
//       "email": email,
//       "number": number
//     })
//   )
//   .catch(error => {
//       dbCalls.logUser("ERROR: ACCOUNT INFO ERROR" + `ID: ${uid}: ${error}`)
//       isSuccess = false
//       errorMessage = "Account Error"
//   })

//   return {isSuccess: isSuccess, errorMessage: errorMessage}
// })

const { onCall } = require("firebase-functions/v2/https");
const { getDatabase } = require('firebase-admin/database');

const db = getDatabase();
const dbCalls = require('./databaseCalls');

exports.setupAccount = onCall(async (request) => {
  let isSuccess = true;
  let errorMessage = null;
  const uid = request.auth.uid;
  const email = request.auth.token.email;
  const { firstName, lastName, number, isEducator } = request.data;

  try {
    await db.ref(`users`).child(uid).update({
      "account_active": true,
      "created": Date.now(),
      "email_verified": false,
      "is_educator": isEducator
    });

    await db.ref(`users`).child(uid).child("profile").update({
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "number": number
    });

    // Log user creation
    await dbCalls.logUser(uid, `ACTION: Firebase Account Created: ID: ${email}`);
  } catch (error) {
    // Log error and update variables
    await dbCalls.logUser(`ERROR: ACCOUNT INFO ERROR ID: ${uid}: ${error}`);
    isSuccess = false;
    errorMessage = "Account Error";
  }

  return { isSuccess, errorMessage };
});
