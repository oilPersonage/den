import type { Metadata } from "next";
import { Play } from "next/font/google";
import Script from "next/script";
import Catalog from "src/components/catalogMenu";
import Footer from "src/components/footer";
import Policies from "src/components/policies";
import { getGroupedProducts } from "src/libs/products";
import "../css/style.css";

const play = Play({
  // Google Fonts правильно!
  weight: ["400", "700"], // Только нужные веса
  subsets: ["latin", "cyrillic"], // Русский!
  variable: "--font-play", // CSS переменная
  display: "swap" // Без layout shift
});

export const metadata: Metadata = {
  title: "Дом повсюду. Строительная компания.",
  description:
    "Строительство домов под ключ в [Город]. Модульные дома, каркасные технологии. Быстро. Надежно. От производителя."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const groupedProducts = await getGroupedProducts();
  return (
    <html lang="en" className={play.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,
  initial-scale=1, maximum-scale=1,
  viewport-fit=cover, shrink-to-fit=no"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link
          rel="icon"
          type="image/svg+xml"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/vite.svg`}
        />
        {/* <meta http-equiv="x-ua-compatible" content="ie=edge" /> */}
        {/* <Script>
			if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual'
			}
			window.scrollTo(0, 0)
		</script> */}
        <title>Строительная компания | Дома под ключ | [Город]</title>

        <meta
          property="og:title"
          content="Строительная компания [Название] | Дома под ключ"
        />
        <meta
          property="og:description"
          content="Профессиональное строительство домов в [Город]. Качество гарантируем."
        />
        <meta property="og:image" content="[ссылка_на_лого_1200x630].jpg" />
        <meta property="og:url" content="https://вашсайт.ru" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Строительная компания [Название]" />
        <meta
          name="twitter:description"
          content="Дома под ключ от производителя"
        />

        <meta name="business:contact_data:country_name" content="Россия" />
        <meta name="business:contact_data:city" content="[Город]" />
      </head>
      <body>
        <div
          id="dots-canvas"
          className="fixed inset-0 -z-1 pointer-events-auto select-none"
        ></div>

        {children}

        <Footer />
        <Policies />
        <Catalog products={groupedProducts} />
      </body>
      <Script
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/scripts/main.js`}
        type="module"
      />
    </html>
  );
}
