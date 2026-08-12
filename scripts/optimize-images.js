const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(filePath, maxW = 600, maxH = 200) {
  try {
    const statBefore = fs.statSync(filePath);
    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();

    if (metadata.width > maxW || metadata.height > maxH) {
      const resized = await sharp(buffer)
        .resize({
          width: maxW,
          height: maxH,
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ compressionLevel: 9, quality: 85 })
        .toBuffer();

      fs.writeFileSync(filePath, resized);
      const statAfter = fs.statSync(filePath);
      console.log(`Optimized ${path.basename(filePath)}: ${(statBefore.size / 1024).toFixed(1)}KB -> ${(statAfter.size / 1024).toFixed(1)}KB`);
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err.message);
  }
}

async function run() {
  const logosDir = path.join(__dirname, '../public/client-logos');
  const files = fs.readdirSync(logosDir);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      await optimizeImage(path.join(logosDir, file));
    }
  }

  // Also optimize specific hero/footer logos
  const extraLogos = [
    path.join(__dirname, '../public/meta_logo.png'),
    path.join(__dirname, '../public/shark_tank_logo.png'),
    path.join(__dirname, '../public/images/dark_logo_zesh.png'),
    path.join(__dirname, '../public/images/light_logo_zesh.png'),
    path.join(__dirname, '../public/images/zesh_logo.png'),
    path.join(__dirname, '../public/images/zesh_logo_light.png'),
  ];

  for (const extra of extraLogos) {
    if (fs.existsSync(extra)) {
      await optimizeImage(extra);
    }
  }
}

run();
