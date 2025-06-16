import { AboutPage } from "./page.about";

export default function AboutUsPage() {
  <AboutPage />;
}

export function generateMetadata() {
  return {
    title: "About Us",
    description:
      "The African Organization for Social Development (OASD) is a charitable organization that is non-profit, non-governmental, and non-discriminatory organization that was established in 2021 in Uganda.",
    openGraph: {
      title: "About Us",
      description:
        "The African Organization for Social Development (OASD) is a charitable organization that is non-profit, non-governmental, and non-discriminatory organization that was established in 2021 in Uganda.",
      type: "website",
      siteName: "OASD",
      locale: "en_US",
      url: "/about",
      images: [
        {
          url: "/images/about_us_bg.png",
          width: 1200,
          height: 630,
          alt: "About Us",
        },
      ],
    },
  };
}
