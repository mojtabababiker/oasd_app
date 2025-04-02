import type { Metadata } from "next";
import { Roboto_Serif, Roboto_Mono } from "next/font/google";
import "./globals.sass";
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactBar from "@/app/components/contact_bar/contact_bar";
import NavBar from "@/app/components/navbar/navbar";
import PartnersSlider from "@/app/components/partners/partners";
import Footer from "@/app/components/footer/footer";

const robotoSerif = Roboto_Serif(
  {
    subsets: ["latin", "cyrillic"],
    weight: ["400", "600", "700"],
    variable: "--roboto-serif",
  },
);

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--roboto-mono",
});

export const metadata: Metadata = {
  title: "OASD Home",
  description: "Organization of African Social Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} ${robotoMono.variable} ${robotoSerif.variable}`}>
        <>
          <ContactBar />
          <NavBar />
          <main >
            {children}
          </main>
          <PartnersSlider />
          {/* footer */}
          {/* <section className="container-fluid footer"></section> */}
          <Footer />
          {/* contact-us */}

          {/* copyrights */}
        </>
      </body>
    </html >
  );
}
