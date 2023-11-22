const admin = require('firebase-admin')

const storage = admin.storage()

exports.uploadImageAndSaveLink = async (request) => {
  const { base64String, courseImage, uid } = request
  const bucket = storage.bucket()
  try {
    if (base64String) {
      const userSnapshot = await admin.database().ref(`users/${uid}/account`).once('value')
      const userData = userSnapshot.val()
      const lastName = userData?.last_name
      const fileName = `educators/${uid}__${lastName}.png`
      const dataPrefix = "data:image/png;base64,"
      let actualBase64 = base64String
      if (base64String.startsWith(dataPrefix)) {
        actualBase64 = base64String.slice(dataPrefix.length)
      }
      const imageRef = bucket.file(fileName)
      await imageRef.save(Buffer.from(actualBase64, 'base64'), {
        metadata: {
          contentType: 'image/png'
        }
      })
      const imageUrl = await imageRef.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
      })
      if (imageUrl[0]) {
        return { imageUrl: imageUrl[0] }
      }
    } else {
        const userSnapshot = await admin.database().ref(`users/${uid}/educator/courses/pending/questions/courseTitle`).once('value')
        const courseTitle = userSnapshot.val()
        console.log("userSnapshot",userSnapshot.val())
        console.log("courseTitle", courseTitle)
        const fileName = `courses/${uid}__${courseTitle}.png`
        const dataPrefix = "data:image/png;base64,"
        let actualBase64 = courseImage
        if (courseImage.startsWith(dataPrefix)) {
          actualBase64 = courseImage.slice(dataPrefix.length)
        }
        const imageRef = bucket.file(fileName)
        await imageRef.save(Buffer.from(actualBase64, 'base64'), {
          metadata: {
            contentType: 'image/png'
          }
        })
        const imageUrl = await imageRef.getSignedUrl({
          action: 'read',
          expires: '03-09-2491'
        })
        if (imageUrl[0]) {
          return { imageUrl: imageUrl[0] }
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error)
    }
  }