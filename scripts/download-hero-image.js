const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images/hero directory if it doesn't exist
const dir = path.join(process.cwd(), 'public', 'images', 'hero');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// URL of a professional home service image (from Pexels, free to use)
const imageUrl = 'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg';
const filePath = path.join(dir, 'hero-service.jpg');

// Download the image
const file = fs.createWriteStream(filePath);
https.get(imageUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Image downloaded successfully!');
  });
}).on('error', (err) => {
  fs.unlink(filePath, () => {}); // Delete the file if there's an error
  console.error('Error downloading image:', err);
});
