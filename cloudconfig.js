const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KAY,
    api_secret:process.env.API_SECRETE
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'dreamstay',
      allowedFormats: ["png", "jpg", "jpeg"] // supports promises as well
    },
  });

  module.exports = {
    cloudinary,
    storage,
  };