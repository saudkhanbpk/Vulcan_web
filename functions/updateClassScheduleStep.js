const { onCall } = require("firebase-functions/v2/https")
const { getDatabase } = require("firebase-admin/database")

const db = getDatabase()
const dbCalls = require("./databaseCalls")

exports.updateClassScheduleStep = onCall(async (request) => {
    const { firstClass, duration, times } = request.data
    let isSuccess = true
    let errorMessage = null
    const uid = request.auth.uid
    const courseDetails = {}

    try {
        if (firstClass) {
            courseDetails.first_class = firstClass
        }
        if (duration) {
            courseDetails.duration = duration
        }
        if (firstClass) {
            courseDetails.times = times
        }

        db.ref(`users/${uid}/educator/courses/pending/class_schedule`).update(courseDetails)

    } catch (error) {
        dbCalls.logUser("ERROR: Class Schedule Step:" + error)
        isSuccess = false
        errorMessage = error
    }
    return { isSuccess: isSuccess, errorMessage: errorMessage }
})      
