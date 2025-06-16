import { JobsPage } from "./page.jobs";

export default function Jobs() {
  return <JobsPage />;
}

export function generateMetadata() {
  return {
    title: "Join The Team",
    description: "Explore job opportunities and join our team.",
    openGraph: {
      title: "Join The Team",
      description: "Explore job opportunities and join our team.",
      url: "/jobs",
      type: "website",
      siteName: "OASD",
      locale: "en_US",
      images: [
        {
          url: "/images/common_header.png",
          width: 1200,
          height: 630,
          alt: "Join The Team",
        },
      ],
    },
  };
}
