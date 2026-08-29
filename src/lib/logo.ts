import { existsSync } from "node:fs";
import { join } from "node:path";

export function customLogoExists() {
  return existsSync(join(process.cwd(), "public/brand/logo.png"));
}
