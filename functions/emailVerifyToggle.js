const { onCall } = require("firebase-functions/v2/https");
const { getAuth } = require("firebase-admin/auth");
const admin = require('firebase-admin');
const { getDatabase } = require("firebase-admin/database");

exports.emailVerifyToggle = onCall(async (request) => {
  const db = getDatabase();
  try {
    const uid = request.auth.uid;
    const user = await getAuth().getUser(uid);
    const verifyEmail = user?.emailVerified;
    const userRef = db.ref(`users/${uid}`);

    await admin.auth().updateUser(uid, {
      emailVerified: !verifyEmail,
    }).then(() => {
      userRef.update({
        email_verified: verifyEmail,
      })
    })
    return { isSuccess: true, errorMessage: null };
  } catch (error) {
    console.error("Error:", error);
    return { isSuccess: false, errorMessage: error.message };
  }
});
