// const { getStorage } = require('firebase-admin/storage')
// const admin = require('firebase-admin')
// const storage = getStorage()

// exports.uploadImageAndSaveLink = async (request) => {
//   const { base64Image, uid } = request
//   const bucket = storage.bucket()
//   try {
//     const userSnapshot = await admin.database().ref(`users/${uid}/account`).once('value')
//     const userData = userSnapshot.val()
//     const lastName = userData?.last_name
//     const fileName = `educators/${uid}__${lastName}.png`
//     const imageBuffer = Buffer.from(base64Image, "base64")
//     await bucket.file(fileName).save(imageBuffer, {
//       metadata: {
//         contentType: "image/png",
//       },
//     }).then(
//       (res) => {
//         console.log("Res maybe url: ", res);
//         const imageRef = `users/${uid}/account/educators/${uid}__${lastName}.png` ;
//         bucket.file(fileName).getSignedUrl({
//           action: "read",
//         })
//           .then((urls) => {
//             const imageUrl = urls[0];
//             console.log("Image URL:", imageUrl);
//           })
//           .catch((error) => {
//             console.error("Error getting image URL:", error);
//           });
//       }
//     )
//     const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`
//     return { imageUrl }
//   } catch (error) {
//     console.error("Error uploading image:", error)
//   }
// }

const admin = require("firebase-admin");

exports.uploadImageAndSaveLink = async (request) => {
  const { base64String, uid } = request

  const userSnapshot = await admin.database().ref(`users/${uid}/account`).once('value')
  const userData = userSnapshot.val()
  const lastName = userData?.last_name
  const fileName = `educators/${uid}__${lastName}.png`
  const imageBuffer = Buffer.from(base64String, "base64")
console.log("fileName", fileName)
  const bucket = admin.storage().bucket();

  const file = bucket.file(fileName)
  console.log("File Path:", file.name);
  const stream = file.createWriteStream({
    metadata: {
      contentType: "image/png",
    },
  });

  stream.on("error",(err) => {
    console.error("Error uploading image:", err);
    
  });

  stream.on("finish", async() => {
    console.log("Image uploaded successfully.");
      // Get the signed URL for the uploaded image
      const [url] = await file.getSignedUrl({
        action: "read",
        expires: "03-01-2500" // Adjust the expiration date as needed
      });
  
      console.log("Image URL:", url);
  });

  stream.end(imageBuffer);

}