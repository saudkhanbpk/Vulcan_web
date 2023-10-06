const { onCall } = require("firebase-functions/v2/https")
const admin = require("firebase-admin")

exports.emailVerifyToggle = onCall(async (context) => {
  try {
    // Check if the user is authenticated
    if (!context.auth) {
      throw new Error("Authentication required.")
    }
    const uid = context.auth.uid
    const emailVerified = context.auth.token.email_verified
    // Toggle the email_verified value in Firebase Authentication
    
    await admin.auth().updateUser(uid, {
      emailVerified: !emailVerified,
    })
    
    return { isSuccess: true, errorMessage: null }
  } catch (error) {
    // Handle errors and log them if necessary
    console.error("Error in emailVerify function:", error)
    return { isSuccess: false, errorMessage: error.message }
  }
})
