const { onCall } = require("firebase-functions/v2/https")
const { getDatabase } = require("firebase-admin/database")

const db = getDatabase()
const dbCalls = require("./databaseCalls")

exports.updateCategoryStep = onCall((request) => {
    let isSuccess = true
    let errorMessage = null
    const uid = request.auth.uid
    const { development, business, financeAndAccounting, itAndSoftware, officeProductivity, personalDevelopment, design, marketing, lifestyle, photographyAndVideo, healthAndFitness, music, teachingAndAcademics, iDontKnowYet, notSure, courseTitle } = request.data
    try {
        const category = {}
        category.development = development
        category.business = business
        category.finance_and_accounting = financeAndAccounting
        category.it_and_software = itAndSoftware
        category.office_productivity = officeProductivity
        category.personal_development = personalDevelopment
        category.design = design
        category.marketing = marketing
        category.lifestyle = lifestyle
        category.photography_and_video = photographyAndVideo
        category.health_and_fitness = healthAndFitness
        category.music = music
        category.teaching_and_academics = teachingAndAcademics
        category.i_dont_know_yet = iDontKnowYet
        
        category.not_sure = notSure
        db.ref(`users/${uid}/educator/courses`).update({denied:false})
        db.ref(`users/${uid}/educator/courses`).update({approved:false})
        db.ref(`users/${uid}/educator/courses/pending/questions`).update({ courseTitle: courseTitle })
        db.ref(`users/${uid}/educator/courses/pending/questions/category`).update(category)
    } catch (error) {
        dbCalls.logUser("ERROR: category Steps: " + error)
        isSuccess = false
        errorMessage = error
    }
    return { isSuccess: isSuccess, errorMessage: errorMessage }
})
