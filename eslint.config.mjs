import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"], // Asegúrate de que esto aplique solo a archivos TypeScript
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Deshabilita la regla
    },
  },
];

export default eslintConfig;