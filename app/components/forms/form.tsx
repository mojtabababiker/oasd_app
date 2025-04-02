"use client";
import React, { BaseSyntheticEvent } from "react";
import Image from "next/image";

export function SubscribeForm() {
  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const { email, msg } = event.target.data;
    console.log(`Form submitted by email: ${email} and message: ${msg}`);
  };

  return (
    <div className="form-container floating-items">
      <div className="form-warper">
        <div className="form-text">
          <h3 className="secondary-title">
            <span>Stay</span> In The Loop{" "}
            <Image
              src={"/images/icons/share_thoughts.png"}
              alt="Bright Ideas"
              width={40}
              height={40}
            />
          </h3>
          <p className="secondary-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            dolores assumenda temporibus minima, libero quod. Voluptatem.
          </p>
        </div>
        <div className="form-input">
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email-field"
              placeholder="Your Email"
            />
            {/* <input className="form-control mb-3" type="text" name="msg" id="msg-field" placeholder=""/> */}
            <input
              className="btn-base solid-btn-primary"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export function ContactUsForm() {
  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    // const { email, msg, name } = formData.
    console.log(formData);
    // console.log(`Form submitted by email: ${email} and message: ${msg}`);
  };

  return (
    <div className="form-container contactus-form-container">
      <div className="form-warper">
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <textarea
            className="form-control"
            name="msg"
            id="msg-field"
            placeholder="Share Your Thoughts Here..."
          />
          <div>
            <h3 className="secondary-title">
              Let&apos;s <span>Talk</span>
            </h3>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email-field"
              placeholder="Your Email"
            />
            <input
              className="form-control"
              type="name"
              name="name"
              id="name-field"
              placeholder="First Name"
            />
            {/* <input className="form-control mb-3" type="text" name="msg" id="msg-field" placeholder=""/> */}
            <input
              className="btn-base solid-btn-primary"
              type="submit"
              value="  Send  "
            />
          </div>
        </form>
      </div>
    </div>
  );
}
