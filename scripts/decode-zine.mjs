import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const partsDir = join(root, "scripts", "zine-b64");
const outDir = join(root, "public", "zine");

mkdirSync(outDir, { recursive: true });

for (let i = 1; i <= 9; i += 1) {
  const name = `page-0${i}.jpg`;
  const whole = join(partsDir, `${name}.b64`);
  const partA = join(partsDir, `${name}.b64.a`);
  const partB = join(partsDir, `${name}.b64.b`);
  const raw = existsSync(whole)
    ? readFileSync(whole, "utf8")
    : `${readFileSync(partA, "utf8")}${readFileSync(partB, "utf8")}`;
  const b64 = raw.replace(/\s+/g, "");
  writeFileSync(join(outDir, name), Buffer.from(b64, "base64"));
}
