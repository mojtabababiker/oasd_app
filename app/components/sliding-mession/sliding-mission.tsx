import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../buttons/buttons";

export default function MissionSlider() {
  return (
    <div className="about-us-brief mission">
      <div className="brief-img">
        <div className="slider-images">
          <div className="slider">
            <Image
              className="image-sliding"
              src={"/images/gallery/slider_1.jpg"}
              alt="Gallery Image"
              width={620}
              height={620}
            />
            <Image
              className="image-sliding"
              src={"/images/gallery/slider_2.jpg"}
              alt="Gallery Image"
              width={620}
              height={620}
            />
            <Image
              className="image-sliding"
              src={"/images/gallery/slider_3.jpg"}
              alt="Gallery Image"
              width={620}
              height={620}
            />
            <Image
              className="image-sliding"
              src={"/images/gallery/slider_4.jpg"}
              alt="Gallery Image"
              width={620}
              height={620}
            />
            <Image
              className="image-sliding"
              src={"/images/gallery/slider_5.jpg"}
              alt="Gallery Image"
              width={620}
              height={620}
            />
            <Image
              className="image-sliding"
              src={"/images/gallery/slider_6.jpg"}
              alt="Gallery Image"
              width={620}
              height={620}
            />
          </div>
        </div>
        <h3>Our Mission</h3>
        <p className="secondary-p">
          To empower African citizens&apos;, families&apos;, and
          communities&apos; rights by promoting purposeful and responsive
          legislation, stakeholder empowerment, good governance, and responsive
          service delivery.
        </p>
        <Button href="/join" className="">
          Join Us
        </Button>
      </div>
      <div className="brief-content">
        <div className="focus-item">
          <div>
            <Image
              src={"/images/icons/kids.png"}
              alt="Kids"
              width={240}
              height={240}
            />
          </div>

          <div className="focus-item-content">
            <h3>Children</h3>
            <p className="secondary-p">
              Women, youth, and child protection and empowerment througout
              Africa
            </p>
          </div>
        </div>
        <div className="focus-item">
          <div>
            <Image
              src={"/images/icons/family.png"}
              alt="Kids"
              width={240}
              height={240}
            />
          </div>

          <div className="focus-item-content">
            <h3>Families</h3>
            <p className="secondary-p">
              Inclusive and effective social protection systems, which grantees
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="focus-item">
          <div>
            <Image
              src={"/images/icons/community.png"}
              alt="Kids"
              width={240}
              height={240}
            />
          </div>

          <div className="focus-item-content">
            <h3>communities</h3>
            <p className="secondary-p">
              Humanitarian situations in conflicts and trafficking. lorem all
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.
            </p>
          </div>
        </div>
        <Button href="/about" className="solid-btn-primary">
          Learn More
        </Button>
      </div>
      <div className="titles">
        <h4 className="sub-title">Our Focuses &amp; Goals</h4>
        <h1 className="main-title">
          Providing <span>comprehensive</span> services to those in needs
        </h1>
      </div>
    </div>
  );
}
