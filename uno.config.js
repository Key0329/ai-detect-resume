import {
  defineConfig,
  transformerVariantGroup,
  transformerDirectives,
  presetWind3,
} from "unocss";

export default defineConfig({
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetWind3()],
});
