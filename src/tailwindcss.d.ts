// src/tailwindcss.d.ts or types/tailwindcss.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (colors: Record<string, string>) => string[];
  export default flattenColorPalette;
}
