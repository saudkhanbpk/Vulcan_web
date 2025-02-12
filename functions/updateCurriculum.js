const { onCall } = require("firebase-functions/v2/https")
const { getDatabase } = require("firebase-admin/database")

const db = getDatabase()
const dbCalls = require("./databaseCalls")

exports.updateCurriculum = onCall((request) => {
    let isSuccess = true
    let errorMessage = null
    try {
        const uid = request.auth.uid
        const sections = request.data
        db.ref(`users/${uid}/educator/courses/pending/curriculum/`).set(sections)
    } catch (error) {
        dbCalls.logUser("ERROR: Curriculum Step: " + error)
        isSuccess = false
        errorMessage = error
    }

    return { isSuccess: isSuccess, errorMessage: errorMessage }
})
