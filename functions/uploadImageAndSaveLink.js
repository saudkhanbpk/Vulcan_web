const { getStorage } = require('firebase-admin/storage');
const storage = getStorage();

exports.uploadImageAndSaveLink = async (request) => {
  const { base64Image } = request
  const bucket = storage.bucket()  
  const fileName = `images/${Date.now()}_image.jpg`
  try {
    const imageBuffer = Buffer.from(base64Image, "base64")
    await bucket.file(fileName).save(imageBuffer, {
      metadata: {
        contentType: "image/jpg",
      },
    })
    const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`
    return { imageUrl }
  } catch (error) {
    console.error("Error uploading image:", error)
  }
}