import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const partsDir = join(root, "scripts", "zine-b64");
const outDir = join(root, "public", "zine");
const letters = "abcdefghijklmnopqrstuvwxyz";

/** Public mirrors of the nine Issue 001 plates (same bytes as public/zine). */
const PLATE_URLS = {
  "page-01.jpg": "https://litter.catbox.moe/zzrefm.jpg",
  "page-02.jpg": "https://litter.catbox.moe/4xqi3p.jpg",
  "page-03.jpg": "https://litter.catbox.moe/mabz1d.jpg",
  "page-04.jpg": "https://litter.catbox.moe/hq0ewl.jpg",
  "page-05.jpg": "https://litter.catbox.moe/zdn8i1.jpg",
  "page-06.jpg": "https://litter.catbox.moe/r596gn.jpg",
  "page-07.jpg": "https://litter.catbox.moe/7gl1yv.jpg",
  "page-08.jpg": "https://litter.catbox.moe/3lf56f.jpg",
  "page-09.jpg": "https://litter.catbox.moe/4rrrb4.jpg",
};

mkdirSync(outDir, { recursive: true });

function isJpeg(buf) {
  return buf.length > 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
}

function readB64(name) {
  const whole = join(partsDir, `${name}.b64`);
  if (existsSync(whole)) {
    return readFileSync(whole, "utf8");
  }
  const parts = [];
  for (const letter of letters) {
    const part = join(partsDir, `${name}.b64.${letter}`);
    if (!existsSync(part)) break;
    parts.push(readFileSync(part, "utf8"));
  }
  if (parts.length === 0) return null;
  return parts.join("");
}

async function fetchPlate(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GET ${url} → ${res.status}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

for (let i = 1; i <= 9; i += 1) {
  const name = `page-0${i}.jpg`;
  const dest = join(outDir, name);
  if (existsSync(dest) && isJpeg(readFileSync(dest))) {
    continue;
  }

  const raw = readB64(name);
  if (raw) {
    const buf = Buffer.from(raw.replace(/\s+/g, ""), "base64");
    if (!isJpeg(buf)) {
      throw new Error(`Decoded ${name} is not a JPEG`);
    }
    writeFileSync(dest, buf);
    continue;
  }

  const url = PLATE_URLS[name];
  if (!url) {
    throw new Error(`Missing zine plate ${name}`);
  }
  const buf = await fetchPlate(url);
  if (!isJpeg(buf)) {
    throw new Error(`Fetched ${name} from ${url} is not a JPEG`);
  }
  writeFileSync(dest, buf);
}
