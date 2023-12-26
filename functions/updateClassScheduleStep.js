const { onCall } = require("firebase-functions/v2/https")
const { getDatabase } = require("firebase-admin/database")

const db = getDatabase()
const dbCalls = require("./databaseCalls")

exports.updateClassScheduleStep = onCall(async (request) => {
    const { firstClassString, duration, times } = request.data
    let isSuccess = true
    let errorMessage = null
    const uid = request.auth.uid
    const courseDetails = {}

    try {
        if (firstClassString) {
            courseDetails.first_class = firstClassString
        }
        if (duration) {
            courseDetails.duration = duration
        }
        if (times) {
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
