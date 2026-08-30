import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const partsDir = join(root, "scripts", "zine-b64");
const outDir = join(root, "public", "zine");
const letters = "abcdefghijklmnopqrstuvwxyz";

mkdirSync(outDir, { recursive: true });

for (let i = 1; i <= 9; i += 1) {
  const name = `page-0${i}.jpg`;
  const whole = join(partsDir, `${name}.b64`);
  let raw;
  if (existsSync(whole)) {
    raw = readFileSync(whole, "utf8");
  } else {
    const parts = [];
    for (const letter of letters) {
      const part = join(partsDir, `${name}.b64.${letter}`);
      if (!existsSync(part)) break;
      parts.push(readFileSync(part, "utf8"));
    }
    if (parts.length === 0) {
      throw new Error(`Missing zine plate ${name}`);
    }
    raw = parts.join("");
  }
  const b64 = raw.replace(/\s+/g, "");
  writeFileSync(join(outDir, name), Buffer.from(b64, "base64"));
}
