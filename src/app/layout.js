import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const MetaInfo = {
  title: "KC Lamb",
  description:
    "Driven Sales & Marketing Professional 🚀 | 6+ Years in Tech Industry | Expert in Market Growth Strategies & Customer Relations 🤝",
};

const SEOImage =
  "https://media.licdn.com/dms/image/D5616AQHr-x31qQBC_g/profile-displaybackgroundimage-shrink_350_1400/0/1690624850122?e=1723075200&v=beta&t=kNrB_9pej9NB0tAD1ZNzg8MAqm0SjJkda8CO5T5yipc";

export const metadata = {
  title: MetaInfo.title,
  description: MetaInfo.description,
  openGraph: {
    title: MetaInfo.title,
    description: MetaInfo.description,
    url: "https://www.linkedin.com/in/kclamb/",
    siteName: "KC Lamb",
    images: [
      {
        url: SEOImage,
        width: 751,
        height: 500,
        alt: "KC Lamb - Passionate Marketing & Sales professional",
      },
      {
        url: SEOImage,
        width: 1261,
        height: 840,
        alt: "KC Lamb - Passionate Marketing & Sales professional",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark:bg-background selection:bg-primary/30 dark:selection:bg-primary_dark selection:text-slate-900"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
