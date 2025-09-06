#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const config = {
  translationDir: "src/locales",
  languages: ["ta", "mr", "te", "ml", "bn", "kn"],
  namespace: "pages",
};

function deepGet(obj, pathParts) {
  return pathParts.reduce(
    (acc, p) => (acc && acc[p] !== undefined ? acc[p] : undefined),
    obj
  );
}

function deepSet(obj, pathParts, value) {
  let cur = obj;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const p = pathParts[i];
    if (cur[p] === undefined || typeof cur[p] !== "object") cur[p] = {};
    cur = cur[p];
  }
  cur[pathParts[pathParts.length - 1]] = value;
}

function getAllKeys(obj, prefix = "") {
  const keys = [];
  for (const [k, v] of Object.entries(obj || {})) {
    const full = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...getAllKeys(v, full));
    } else {
      keys.push(full);
    }
  }
  return keys;
}

async function run() {
  const base = process.cwd();
  const enPath = path.join(
    base,
    config.translationDir,
    "en",
    `${config.namespace}.json`
  );
  const en = JSON.parse(await fs.promises.readFile(enPath, "utf-8"));
  const enKeys = getAllKeys(en);

  for (const lang of config.languages) {
    const filePath = path.join(
      base,
      config.translationDir,
      lang,
      `${config.namespace}.json`
    );
    let data = {};
    try {
      data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));
    } catch (e) {
      console.warn(`Creating new file for ${lang}/${config.namespace}`);
      data = {};
    }

    let added = 0;
    for (const key of enKeys) {
      const parts = key.split(".");
      const existing = deepGet(data, parts);
      if (existing === undefined) {
        const enValue = deepGet(en, parts);
        const placeholder =
          typeof enValue === "string" ? `  ${enValue}` : enValue;
        deepSet(data, parts, placeholder);
        added++;
      }
    }

    if (added > 0) {
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      await fs.promises.writeFile(
        filePath,
        JSON.stringify(data, null, 2) + "\n",
        "utf-8"
      );
      console.log(`Updated ${lang}/${config.namespace}: added ${added} keys`);
    } else {
      console.log(`${lang}/${config.namespace} already up to date`);
    }
  }
}

if (require.main === module) {
  run().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

module.exports = { run };
