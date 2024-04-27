const sharp = require('sharp');
const fs = require('fs');

// Optimize the image by transforming it to a webp format
const sharpMiddleware = (req, res, next) => {
  if (req.file) {
    const newFilename = req.file.filename.replace(/\.[^.]+$/, ".webp");

    sharp(req.file.path)
      .webp({  quality: 50 })
      .toFile(`images/${newFilename}`)
      .then(() => {
        fs.unlinkSync(req.file.path);
        req.file.path = `images/${newFilename}`;
        req.file.filename = newFilename;
        req.file.mimetype = "image/webp";
        next();
      })
      .catch((err) => {
          next(err);
      });
  } else {
    next();
  }
};

module.exports = sharpMiddleware;
