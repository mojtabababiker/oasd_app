import React from 'react';
import Link from 'next/link';
import { BrandIcons, SolidIcons } from "@/app/components/icons/icons";
// import styles from './contact_bar.module.sass';

export default function ContactBar() {
  return (
    <div className="container-fluid contact-warper">
      <div className="container-fluid contacts-bar">
        <div className="row align-items-center">
          <ul className="contacts col-lg-8 col-md-8">
            <li className="contact-item">
              <Link className="contact-link" href="mailto:Hello@oasd.africa">
                {/* <i className="fa-solid fa-envelope fa-sm"></i> */}
                <SolidIcons icon="envelope" className="icon" />
                Hello@oasd.africa
              </Link>
            </li>
            <li className="contact-item">
              <Link className="contact-link" href="#">
                {/* <i className="fa-solid fa-phone fa-sm"></i> */}
                <SolidIcons icon="phone" className="icon" />
                +256 741 230000
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
          <ul className="contacts contacts-right col-lg-4 col-md-4 pt-3 p-lg-0">
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
    </div>
  );
}