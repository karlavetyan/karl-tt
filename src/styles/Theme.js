import { lighten, readableColor, rgba } from "polished";

const primary = "#4859F0";
const font = "Inter, sans-serif";

const brand = {
  primary: primary,
  primaryDark: "#1F2670",
  primaryLight: lighten(0.02, primary),
  primaryRc: readableColor(primary),
  primary10: rgba(primary, 0.1),
  primary20: rgba(primary, 0.2),
  primary30: rgba(primary, 0.3),
  primary40: rgba(primary, 0.4),
  primary50: rgba(primary, 0.5),
  primary60: rgba(primary, 0.6)
};

export const light = {
  font,
  isDark: false,
  colors: {
    ...brand,
    background: "#ffffff",
    background90: rgba("#ffffff", 0.9),
    background60: rgba("#ffffff", 0.6),
    text: "#212121",
    footer: "#212121",
    footerInput: "#1B1B1B",
    footerText: "#ffffff",
    accent: "#9B9591",
    accentDark: "#6F6F6F",
    accentLight: "#F5F5F5",
    accentSoft: "#E2E0DF"
  }
};

export const dark = {
  font,
  isDark: true,
  colors: {
    ...brand,
    background: "#171717",
    background90: rgba("#171717", 0.9),
    background60: rgba("#171717", 0.6),
    text: "#ffffff",
    footer: "#1d1d1d",
    footerInput: "#101010",
    footerText: "#ffffff",
    accent: "#868686",
    accentDark: "#5b5b5b",
    accentLight: "#2e2e2e",
    accentSoft: "#444444"
  }
};
