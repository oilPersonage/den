// @ts-check
import { type NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: isProd ? "/oilpersonage/den/" : undefined,
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true // 👈 Игнорирует ВСЕ TS ошибки!
  }
};

export default nextConfig;
