'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "@/app/components/breadcrumb/breadcrumb";
import { ContactUsForm } from "@/app/components/forms/form"


export default function ContactUs() {
  const [breadcrumb, setBreadCrumb] = useState({
    self: "Get In Touch",
    ancestors: [
      { title: 'Home', link: '/' },
    ]
  });
  const [activeContact, setActiveContact] = useState("");

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      console.log(event.key);
      if (event.key === 'Escape') {
        setActiveContact("");
      }
    });

    // document.addEventListener('click', (event) => {
    //   // setActiveContact("");
    // });
  }, []);

  return (
    <main className="contact-us-main">
      <BreadCrumb self={breadcrumb.self} ancestors={breadcrumb.ancestors} classType="contact-us-bg" />
      <section className="container-fluid contact-us-warper">
        <section className="container-fluid section section-md">
          <div className="contact-us-container">
            <div className="text-warper">
              <h3 className="sub-title">Contact Us</h3>
              <h1 className="main-title">You Can Reach Us On</h1>
            </div>
            <ul className="contact-us-list section">
              <li className="contact-us-item" onClick={(event) => { event.stopPropagation(); setActiveContact("map") }}>
                <Image src={'/images/icons/map_icon.gif'} alt="Location Icon" width={260} height={260} unoptimized={true} />
                <div className="info">
                  <h3 className={`sub-title ${activeContact === "map" && "scale_in"}`}>
                    <Link href={'#map'}>Uganda-Kampala-Nakawa , 2745 Tankhill Rd </Link>
                  </h3>
                </div>
              </li>
              <li className="contact-us-item" onClick={(event) => { event.stopPropagation(); setActiveContact("email") }}>
                <Image src={'/images/icons/mail_icon.gif'} alt="Email Icon" width={260} height={260} unoptimized={true} />
                <div className="info">
                  <h3 className={`sub-title ${activeContact === "email" && "scale_in"}`}>
                    <Link href={"mailto:hello@oasd.africa"}>
                      Hello@oasd.africa
                    </Link>
                  </h3>
                </div>
              </li>
              <li className="contact-us-item" onClick={(event) => { event.stopPropagation(); setActiveContact("phone") }}>
                <Image src={'/images/icons/phone_icon.gif'} alt="Cell Phone Icon" width={260} height={260} unoptimized={true} />
                <div className="info">
                  <h3 className={`sub-title ${activeContact === "phone" && "scale_in"}`}>
                    <Link href={"call:+256 741 230000"}>+256 741 230000</Link>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="section contacts-us-warper">
            <ContactUsForm />
          </div>
        </section>
      </section>
      <section className="container-fluid map-container">
        <div className="container-fluid section map-container">
          <h3 className="sub-title">Contact Us</h3>
          <h1 className="main-title">Or Find Us Here</h1>
          <div className="container-fluid section map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7660477576765!2d32.61506887577265!3d0.2932908640590397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc253dbbfd79%3A0x87459690d20ed429!2s2745%20Tank%20Hill%20Rd%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2seg!4v1704401025416!5m2!1sen!2seg" width="800" height="600" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}