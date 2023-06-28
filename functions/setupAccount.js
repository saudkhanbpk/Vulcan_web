const {onCall} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();
db = admin.database().ref()


exports.setupAccount = onCall((request) => {

  db = admin.database().ref()
  
  const uid = request.auth.uid
  const email = request.auth.token.email
  const firstName = request.data.firstName
  const lastName = request.data.lastName
  const number = request.data.number || null
  const emailVerified = false
  const accountActive = true
  const created = Date.now()

  return {
    isSuccess: true,
    errorDisplay: ""
  };
});