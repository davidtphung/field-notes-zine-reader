import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const partsDir = join(root, "scripts", "zine-b64");
const outDir = join(root, "public", "zine");

mkdirSync(outDir, { recursive: true });

for (let i = 1; i <= 9; i += 1) {
  const name = `page-0${i}.jpg`;
  const b64 = readFileSync(join(partsDir, `${name}.b64`), "utf8").replace(
    /\s+/g,
    "",
  );
  writeFileSync(join(outDir, name), Buffer.from(b64, "base64"));
}
