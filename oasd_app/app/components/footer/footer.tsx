import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SubscribeForm, ContactUsForm } from "@/app/components/forms/form";
import { BrandIcons, SolidIcons } from "@/app/components/icons/icons";


export default function Footer() {
  return (
    <section className="container-fluid footer-container">
      <SubscribeForm />
      <div className="container-fluid footer-warper">
        {/* footer brand info */}
        <section className="footer-brief-container">
          <div className="navlogo">
            <Link href='/' className='nav-brand'>
              <Image src='/images/navbar_logo.png' alt='OASD Logo' width={80} height={30} />
            </Link>
          </div>
          <div className="footer-brief">
            <p className="secondary-p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quaerat maiores culpa praesentium error rem voluptatem laudantium
              exercitationem voluptas ipsum, est tempore deleniti
              incidunt obcaecati vitae. Laborum, officiis asperiores!
            </p>
          </div>
          <div className="contact-info">
            <ul className="contacts">
              <li className="contact-item">
                <Link className="contact-link" href="mailto:Hello@oasd.africa">
                  {/* <i className="fa-solid fa-envelope fa-sm"></i> */}
                  <SolidIcons icon="envelope" className="icon" />
                  Hello@oasd.africa
                </Link>
              </li>
              <li className="contact-item">
                <Link className="contact-link" href="tel://+256123456789">
                  {/* <i className="fa-solid fa-phone fa-sm"></i> */}
                  <SolidIcons icon="phone" className="icon" />
                  +256 123 456 789
                </Link>
              </li>
              <li className="contact-item">
                <Link className="contact-link" href="https://www.google.com/maps/place/2745+Tank+Hill+Rd,+Kampala,+Uganda/@0.293286,32.617644,17z/data=!4m5!3m4!1s0x177dbc253dbbfd79:0x87459690d20ed429!8m2!3d0.2932855!4d32.6176438?hl=en&entry=ttu"
                  target="_blank" rel="noopener noreferrer">
                  {/* <i className="fa-solid fa-location-dot fa-sm"></i> */}
                  <SolidIcons icon="location-dot" className="icon" />
                  Uganda-Kampala-Nakawa, 2745 Tankhill Rd
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* footer quick links */}
        <section className="quick-links-container">
          <div className="quick-links">
            <h3 className="secondary-title">Quick Links</h3>
            <ul>
              <li>
                <Link className="sub-title" href={'/posts'}>Programs &amp; Causes</Link>
              </li>
              <li>
                <Link className="sub-title" href={'/about'}>About OASD</Link>
              </li>
              <li>
                <Link className="sub-title" href={'/jobs'}>Join The Team</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="contact-us-form-container">
          {/* <h3 className="secondary-title">Get In Touch</h3> */}
          {/* get in touch form */}
          <ContactUsForm />
        </section>
      </div>
      <div className="container-fluid copy-rights">
        <div className="col align-content-center">
          <p className="mb-0">Copyright © 2024 All Rights Reserved</p>
        </div>
        <div>
          <ul className="contacts contacts-right ">
            <li className="contact-item">
              <Link className="contact-link" href="#">
                {/* <i className="fa-brands fa-instagram" ></i> */}
                <BrandIcons icon="instagram" className="icon" />
              </Link>
            </li>
            <li className="contact-item">
              <Link className="contact-link" href="#">
                {/* <i className="fa-brands fa-square-facebook" ></i> */}
                <BrandIcons icon="square-facebook" className="icon" />
              </Link>
            </li>
            <li className="contact-item">
              <Link className="contact-link" href="#">
                {/* <i className="fa-brands fa-square-twitter" ></i> */}
                <BrandIcons icon="square-twitter" className="icon" />
              </Link>
            </li>
            <li className="contact-item">
              <Link className="contact-link" href="#">
                {/* <i className="fa-brands fa-linkedin" ></i> */}
                <BrandIcons icon='' className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}