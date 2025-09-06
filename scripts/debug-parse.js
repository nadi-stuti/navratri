import fs from "fs";
const path = "d:/work/projects/navratri/src/locales/te/pages.json";
const s = fs.readFileSync(path, "utf8");
let depth = 0;
for (let i = 0; i < s.length; i++) {
  const ch = s[i];
  if (ch === '"') {
    i++;
    while (i < s.length) {
      if (s[i] === "\\") {
        i += 2;
        continue;
      }
      if (s[i] === '"') break;
      i++;
    }
    continue;
  }
  if (ch === "{") depth++;
  else if (ch === "}") {
    depth--;
    if (depth === 0) {
      console.log("closed at", i);
      console.log("next50:", JSON.stringify(s.slice(i + 1, i + 51)));
      console.log("prev50:", JSON.stringify(s.slice(i - 50, i + 1)));
      break;
    }
  }
}
console.log("final depth", depth);
