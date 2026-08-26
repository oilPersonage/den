import localFont from "next/font/local";

export const lunaObscura = localFont({
  src: [{ path: "../../public/lunaObs.ttf", weight: "400", style: "normal" }],
  variable: "--font-lunaObscura",
  display: "swap",
});
