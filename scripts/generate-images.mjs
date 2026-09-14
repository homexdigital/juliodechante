import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, "perfiljulio.jpg");
const PRIMARY = "#0E2338";
const CREAM = "#FFFFFF";
const ACCENT = "#00A3FF";
const GOLD = "#E5A823";

mkdirSync(path.join(ROOT, "public", "images"), { recursive: true });

async function buildProfilePhoto() {
  await sharp(SOURCE)
    .resize({ width: 900, withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toFile(path.join(ROOT, "public", "images", "julio-dechante.jpg"));
  console.log("✔ public/images/julio-dechante.jpg");
}

async function buildOgImage() {
  const width = 1200;
  const height = 630;
  const photoSize = 630;
  const photoLeft = width - photoSize;

  const photo = await sharp(SOURCE)
    .resize(photoSize, photoSize, { fit: "cover" })
    .toBuffer();

  // Overlay only: fade + text. Background and photo are composited underneath
  // so the portrait stays visible on the right.
  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="1"/>
        <stop offset="55%" stop-color="${PRIMARY}" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="${photoLeft - 160}" y="0" width="220" height="${height}" fill="url(#fade)"/>
    <text x="72" y="230" font-family="Arial Black, Arial, sans-serif" font-size="54" font-weight="900" fill="${CREAM}">Hipnoterapia Avançada</text>
    <text x="72" y="300" font-family="Arial Black, Arial, sans-serif" font-size="54" font-weight="900" fill="${CREAM}">para Ansiedade</text>
    <rect x="72" y="335" width="90" height="6" fill="${GOLD}"/>
    <text x="72" y="400" font-family="Arial Black, Arial, sans-serif" font-size="30" fill="${ACCENT}">Método SER · Júlio Dechante</text>
    <text x="72" y="445" font-family="Arial, sans-serif" font-size="26" fill="${CREAM}" opacity="0.75">Sinop-MT e online · +5.000 pessoas tratadas</text>
  </svg>`;

  await sharp({
    create: { width, height, channels: 4, background: PRIMARY },
  })
    .composite([
      { input: photo, left: photoLeft, top: 0 },
      { input: Buffer.from(svg), left: 0, top: 0 },
    ])
    .jpeg({ quality: 88 })
    .toFile(path.join(ROOT, "public", "og-image.jpg"));
  console.log("✔ public/og-image.jpg");
}

async function buildLogo() {
  await sharp(SOURCE)
    .resize(512, 512, { fit: "cover" })
    .png()
    .toFile(path.join(ROOT, "public", "logo.png"));
  console.log("✔ public/logo.png");
}

async function buildFaviconSources() {
  // Crop tighter on the face/head for a legible tiny icon (source is 1080×1080).
  const faceCrop = sharp(SOURCE).extract({ left: 140, top: 40, width: 800, height: 800 });

  const icon512 = await faceCrop.clone().resize(512, 512).png().toBuffer();
  writeFileSync(path.join(ROOT, "src", "app", "icon.png"), icon512);
  console.log("✔ src/app/icon.png");

  const appleIcon = await faceCrop.clone().resize(180, 180).png().toBuffer();
  writeFileSync(path.join(ROOT, "src", "app", "apple-icon.png"), appleIcon);
  console.log("✔ src/app/apple-icon.png");

  const png32 = await faceCrop
    .clone()
    .resize(32, 32)
    .ensureAlpha()
    .png()
    .toBuffer();
  const ico = pngToIco(png32, 32);
  writeFileSync(path.join(ROOT, "src", "app", "favicon.ico"), ico);
  console.log("✔ src/app/favicon.ico");
}

// Minimal ICO container wrapping a single PNG image (valid since Vista+, supported by all modern browsers).
function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image size
  entry.writeUInt32LE(header.length + entry.length, 12); // offset

  return Buffer.concat([header, entry, pngBuffer]);
}

await buildProfilePhoto();
await buildOgImage();
await buildLogo();
await buildFaviconSources();
