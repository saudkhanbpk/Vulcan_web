const { onCall } = require("firebase-functions/v2/https")
const { getDatabase } = require("firebase-admin/database")

const db = getDatabase()
const dbCalls = require("./databaseCalls")

exports.updateCategoryStep = onCall((request) => {
    const { courseTitle, courseSubTitle, categoryValue } = request.data
    let isSuccess = true
    let errorMessage = null
    const uid = request.auth.uid
    try {
        db.ref(`users/${uid}/educator/courses/pending/questions`).update({ courseTitle: courseTitle })
        db.ref(`users/${uid}/educator/courses/pending/questions`).update({ courseSubTitle: courseSubTitle })
        db.ref(`users/${uid}/educator/courses/pending/questions/category`).update({ categoryValue: categoryValue })
    } catch (error) {
        dbCalls.logUser("ERROR: category Steps: " + error)
        isSuccess = false
        errorMessage = error
    }
    return { isSuccess: isSuccess, errorMessage: errorMessage }
})
