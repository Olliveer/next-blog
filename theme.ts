import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--brand": "#2596be",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  // Base theme colors
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // brand
  "--brand-primary": props["--brand"],

  // default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-danger-color": props["--my-red"],
  "--default-button-warning-color": props["--my-yellow"],

  // state
  "--state-info-color": props["--brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  // navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--brand"],
});
