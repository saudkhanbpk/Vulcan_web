const { onCall } = require("firebase-functions/v2/https")
const admin = require('firebase-admin')
const { getDatabase } = require("firebase-admin/database")

exports.emailVerifyToggle = onCall(async (request) => {
  const db = getDatabase()
  try {
    const uid = request.auth.uid
    const { emailVerified } = request.data
    const userRef = db.ref(`users/${uid}`)
    await admin.auth().updateUser(uid, {
      emailVerified: emailVerified,
    }).then(() => {
      userRef.update({
        email_verified: emailVerified,
      })
    })
    return { isSuccess: true, errorMessage: null }
  } catch (error) {
    console.error("Error:", error)
    return { isSuccess: false, errorMessage: error.message }
  }
})
