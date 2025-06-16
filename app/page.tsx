import { HomePage } from "./page.home";

export default function Home() {
  return <HomePage />;
}

export function generateMetadata() {
  return {
    title: "OASD - Home",
    description:
      "Foster social and economic development for Africa's underprivileged and disadvantaged communities. We prioritize family, women, youth, and child safety issues, as well as inclusive and effective social protection systems.",
    openGraph: {
      title: "OASD - Home",
      description:
        "Foster social and economic development for Africa's underprivileged and disadvantaged communities. We prioritize family, women, youth, and child safety issues, as well as inclusive and effective social protection systems.",
      url: "/",
      type: "website",
      siteName: "OASD",
      locale: "en_US",
      images: [
        {
          url: "/images/home-og.jpg",
          width: 1200,
          height: 630,
          alt: "OASD Home",
        },
      ],
    },
  };
}
