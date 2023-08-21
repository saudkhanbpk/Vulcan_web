const { onCall } = require("firebase-functions/v2/https") 
const { getDatabase } = require("firebase-admin/database") 

const db = getDatabase() 
const dbCalls = require("./databaseCalls") 

exports.updateAccountInfo = onCall((request) => {
  var isSuccess = true 
  var errorMessage = null 
  const uid = request.auth.uid 
  const email = request.auth.token.email 
  const { firstName, lastName, number } = request.data 

  try {
    if (firstName) {
      db.ref(`users`).child(uid).update({
        first_name: firstName,
      }) 
    }

    if (lastName) {
      db.ref(`users`).child(uid).update({
        last_name: lastName,
      }) 
    }

    if (number) {
      db.ref(`users`).child(uid).update({
        number: number,
      }) 
    }
  } catch (error) {
    dbCalls.logUser("ERROR: Update Account: " + error) 
    isSuccess = false 
    errorMessage = "Account Update Error" 
  }

  return { isSuccess: isSuccess, errorMessage: errorMessage } 
}) 
