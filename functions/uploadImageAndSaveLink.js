const { onCall, HttpsError } = require("firebase-functions/v2/https") 
const { Storage } = require("@google-cloud/storage") 

const storage = new Storage() 

exports.uploadImage = onCall(async (data, context) => {
  if (!context.auth) {
    throw HttpsError(
      "unauthenticated",
      "You must be authenticated to upload an image."
    ) 
  }
  const { base64Image } = data 
  const bucket = storage.bucket()  // Use the default bucket
  // Generating a unique filename
  const fileName = `images/${Date.now()}_image.jpg` 
  try {
    const imageBuffer = Buffer.from(base64Image, "base64") 
    // Uploading the image to Cloud Storage
    await bucket.file(fileName).save(imageBuffer, {
      metadata: {
        contentType: "image/jpeg",
      },
    }) 
    // Here is the URL of the uploaded image
    const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}` 
    return { imageUrl } 
  } catch (error) {
    console.error("Error uploading image:", error) 
    throw HttpsError("internal", "Error uploading the image.", error) 
  }
}) 
