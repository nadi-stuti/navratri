#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const config = {
  translationDirectories: ["src/locales"],
  supportedLanguages: ["en", "hi", "ta", "mr", "te", "ml", "bn", "kn"],
  namespaces: ["common", "pages", "recipes", "festival"],
};

function getAllKeys(obj, prefix = "") {
  const keys = [];
  for (const [key, value] of Object.entries(obj || {})) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

async function loadJson(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return {};
  }
}

async function run() {
  const baseDir = process.cwd();
  const translationsDir = path.join(baseDir, config.translationDirectories[0]);

  const results = [];

  const enTranslations = {};
  for (const ns of config.namespaces) {
    enTranslations[ns] = await loadJson(
      path.join(translationsDir, "en", `${ns}.json`)
    );
  }

  for (const lang of config.supportedLanguages) {
    if (lang === "en") continue;
    for (const ns of config.namespaces) {
      const filePath = path.join(translationsDir, lang, `${ns}.json`);
      const data = await loadJson(filePath);
      const refKeys = getAllKeys(enTranslations[ns] || {});
      const langKeys = getAllKeys(data || {});
      const missing = refKeys.filter((k) => !langKeys.includes(k));
      if (missing.length) {
        results.push({ language: lang, namespace: ns, missing });
      }
    }
  }

  if (results.length === 0) {
    console.log("No missing keys found.");
    return;
  }

  for (const r of results) {
    console.log(
      `\n--- ${r.language}/${r.namespace}: ${r.missing.length} missing keys ---`
    );
    r.missing.forEach((k) => console.log(k));
  }
}

if (require.main === module) {
  run().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

module.exports = { run };
