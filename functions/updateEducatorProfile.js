const { onCall } = require("firebase-functions/v2/https")  
const { getDatabase } = require("firebase-admin/database")

const db = getDatabase()  
const dbCalls = require("./databaseCalls")  

exports.updateEducatorProfile = onCall((request) => {

    let isSuccess = true
    let errorMessage = null
    const uid = request.auth.uid

    const { aboutMe, avatar, website, youtube, twitter, linkedin } = request.data

    try {
        const educatorProfile = {}

        if (aboutMe) {
            educatorProfile.about_me = aboutMe
        }

        if (avatar) {
            educatorProfile.avatar = avatar
        }

        if (website) {
            educatorProfile.website = website
        }

        if (youtube) {
            educatorProfile.youtube = youtube
        }

        if (twitter) {
            educatorProfile.twitter = twitter
        }

        if (linkedin) {
            educatorProfile.linkedin = linkedin
        }

        db.ref(`users/${uid}/educator/educator_profile`).update(educatorProfile)

    } catch (error) {
        dbCalls.logUser("ERROR: Update Educator Profile Step: " + error)  
        isSuccess = false
        errorMessage = error
    }

    return { isSuccess: isSuccess, errorMessage: errorMessage }  
})  
