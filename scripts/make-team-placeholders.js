const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const outDir = path.join("public", "images", "team");
fs.mkdirSync(outDir, { recursive: true });

const w = 800;
const h = 1067;

const svg = Buffer.from(
  `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#E8EDF2"/>
    <circle cx="400" cy="420" r="90" fill="#C5CED8"/>
    <ellipse cx="400" cy="700" rx="160" ry="140" fill="#C5CED8"/>
  </svg>`
);

(async () => {
  for (const name of ["member-1.png", "member-2.png", "member-3.png"]) {
    await sharp(svg).png().toFile(path.join(outDir, name));
    console.log("wrote", name);
  }
})();
