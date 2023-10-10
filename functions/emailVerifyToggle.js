const { onCall } = require("firebase-functions/v2/https")
const { getAuth } = require("firebase-admin/auth")
// const admin = require('firebase-admin')

exports.emailVerifyToggle = onCall(async (context) => {
  try {
    if (!context.auth) {
      throw new Error("Authentication required.")
    }
    const uid = context.auth.uid
    const emailVerified = context.auth.token.email_verified
    
    console.log("----------------------------")
    // await admin.auth().updateUser(uid, {
    //   emailVerified: !emailVerified,
    // })
    
    await getAuth().updateUser(uid, {
      emailVerified: !emailVerified,
    })
    console.log("----------------------------")
    return { isSuccess: true, errorMessage: null }
  } catch (error) {
    // console.error("Error in emailVerify function:", error)
    return { isSuccess: false, errorMessage: error.message }
  }
})
