// @ts-check
import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true // 👈 Игнорирует ВСЕ TS ошибки!
  }
};

export default nextConfig;
