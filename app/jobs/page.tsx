"use client";
import { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import { Button } from "../components/buttons/buttons";

export default function Jobs() {
  const [breadcrumb] = useState({
    self: "Join The Team",
    ancestors: [{ title: "Home", link: "/" }],
  });
  return (
    <main className="contact-us-main">
      <BreadCrumb
        self={breadcrumb.self}
        ancestors={breadcrumb.ancestors}
        classType="contact-us-bg"
      />
      <section className="container-fluid section jop-container">
        <InView
          as="p"
          className="secondary-p"
          threshold={1}
          onChange={(inView, entry) =>
            inView && entry.target.classList.add("slide-right")
          }
        >
          No jobs available at the moment. Please check back later.
        </InView>
        <InView
          as="div"
          className="w-full flex items-center justify-center"
          onChange={(inView, entry) =>
            inView && entry.target.classList.add("slide-bottom")
          }
        >
          <Button href="/" className="outline-btn">
            Back Home
          </Button>
        </InView>
      </section>
    </main>
  );
}

export async function generateMetadata() {
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
