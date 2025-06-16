"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BreadCrumb from "@/app/components/breadcrumb/breadcrumb";
import AboutUs from "@/app/components/about-us-hero/about_us_hero";
import { TeamCard } from "../components/cards/cards";

const services = [
  {
    id: 1,
    title: "Education",
    className: "education",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium dicta nulla nemo natus laborum voluptate recusandae quos!",
  },
  {
    id: 2,
    title: "Health Care",
    className: "health-care",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium dicta nulla nemo natus laborum voluptate recusandae quos!",
  },
  {
    id: 3,
    title: "Culture",
    className: "culture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium dicta nulla nemo natus laborum voluptate recusandae quos!",
  },
  {
    id: 4,
    title: "Emergency Reliefs",
    className: "crisis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium dicta nulla nemo natus laborum voluptate recusandae quos!",
  },
];

const valuesList = [
  { id: 0, title: "Equality", icon: "equality.gif" },
  { id: 1, title: "Empowerment", icon: "empower.gif" },
  { id: 2, title: "Peace And Justice", icon: "peace.gif" },
  { id: 3, title: "Sustainability", icon: "sustainability.gif" },
];
export function AboutPage() {
  const [breadcrumb, setBreadCrumb] = useState({
    self: "About Us",
    ancestors: [{ title: "Home", link: "/" }],
  });

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [showService, setShowService] = useState(true);
  const [values, setValues] = useState({
    prevIndex: 0,
    currentIndex: 1,
    nextIndex: 2,
  });

  //==================================================
  //                 animating services
  useEffect(() => {
    const interval = setInterval(() => {
      setShowService(false);

      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
      setShowService(true);
      // setTimeout(() => {
      // }, 0);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[currentServiceIndex];
  //====================================================

  //==================================================
  //                 animating values
  useEffect(() => {
    // setValues({ prevIndex: 0, currentIndex: 1, nextIndex: 2 })
    // const currentIndex = 1;
    const interval = setInterval(() => {
      // const prev = values.prevIndex + 1;
      // const cur = values.nextIndex;
      // const next = values.nextIndex === valuesList.length
      //   ? 0
      //   : values.nextIndex + 1;

      setValues((prevValues) => {
        const prev = prevValues.currentIndex;
        const cur = prevValues.nextIndex;
        const next =
          prevValues.nextIndex === valuesList.length - 1
            ? 0
            : prevValues.nextIndex + 1;

        console.log(`prev: ${prev}, cur: ${cur}, next: ${next}`);
        return { prevIndex: prev, currentIndex: cur, nextIndex: next };
      });
      // console.log(values);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevValue = valuesList[values.prevIndex];
  const currentValue = valuesList[values.currentIndex];
  const nextValue = valuesList[values.nextIndex];

  return (
    <main>
      <BreadCrumb
        self={breadcrumb.self}
        ancestors={breadcrumb.ancestors}
        classType="about-bg"
      />
      {/* hero section */}
      <section className="container-fluid section about-us-hero">
        <AboutUs actionLink="/jobs" actionTitle="Join Us" />
      </section>
      {/* mission and vision section */}
      <section className="container-fluid section vision-and-mission-container">
        <div className="mission-container vision-container">
          <div className="image-container">
            {/* <Image src='/images/mission.png' alt='Mission Image' width={640} height={640} /> */}
          </div>
          <div>
            <h3 className="sub-title">Our Mission</h3>
            <h1 className="main-title">
              To Empower African Citizens, And Establishing Long-Term Income
            </h1>
            <p className="secondary-p">
              To empower African citizens&apos;, families&apos;, and
              communities&apos; rights by promoting purposeful and responsive
              legislation, stakeholder empowerment, good governance, and
              responsive service delivery.
              <br />
              We take a social development approach that includes empowering
              communities, fostering peace and social justice, increasing access
              to public services, combating prejudice, and establishing
              long-term income and economic structures.
            </p>
          </div>
        </div>
        <div className="vision-container">
          <div>
            <h3 className="sub-title">Our Vision</h3>
            <h1 className="main-title">Is The Well-Being Of A Society</h1>
            <p className="secondary-p">
              Around <span>431 million</span> Africans on the continent are
              living below the extreme poverty line and underprivileged, OASD
              vision is the well-being of a society in which there is an
              established system of social growth and citizens enjoy their
              social, political, and economic rights.
            </p>
          </div>
          <div className="image-container">
            {/* <Image src='/images/vision.png' alt='Vision Image' width={640} height={640} /> */}
          </div>
        </div>
      </section>
      {/* services section */}
      <section className="container-fluid section services">
        <div className="services-title">
          <h3 className="sub-title">Services</h3>
          <h1 className="main-title">
            Benefits Children, Families, And Communities In Need Throughout
            Africa
          </h1>
        </div>
        <div className="services-slider">
          <div
            className={`slide ${currentService.className} ${
              showService ? "visible" : "hidden"
            }`}
          >
            <div className="text-warper">
              <h1 className="primary-title">
                {currentService.title.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="letter-slide"
                    style={{
                      animationDuration: `${
                        currentService.title.length * 0.3 + 1
                      }s`,
                      animationDelay: `${index * 0.3 + 2.7}`,
                    }}
                  >
                    {letter.toUpperCase()}
                  </span>
                ))}
                {/* <span className="letter-slide">E</span>
                  <span className="letter-slide">D</span>
                  <span className="letter-slide">U</span>
                  <span className="letter-slide">C</span>
                  <span className="letter-slide">A</span>
                  <span className="letter-slide">T</span>
                  <span className="letter-slide">I</span>
                  <span className="letter-slide">O</span>
                  <span className="letter-slide">N</span> */}
                {/* Education */}
              </h1>
              <h3 className="sub-title">{currentService.description}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* values section */}
      <section className="container-fluid section values">
        <div className="values-title">
          <h3 className="sub-title">Our Values</h3>
          <h1 className="main-title">The Principles We Adhere on </h1>
        </div>
        <div className="values-container">
          <ul className="values-list">
            <li
              key={prevValue.id}
              className="value-item prev from-active-to-prev"
            >
              <Image
                src={`/images/gallery/values/${prevValue.icon}`}
                alt={`${prevValue.title} GIF image`}
                width={460}
                height={460}
                unoptimized={true}
              />
              <h3 className="main-title">{prevValue.title}</h3>
            </li>
            <li
              key={currentValue.id}
              className="value-item active from-next-to-active"
            >
              <Image
                src={`/images/gallery/values/${currentValue.icon}`}
                alt={`${currentValue.title} GIF image`}
                width={460}
                height={460}
                unoptimized={true}
              />
              <h3 className="main-title">{currentValue.title}</h3>
            </li>
            <li
              key={nextValue.id}
              className="value-item next from-hidden-to-next"
            >
              <Image
                src={`/images/gallery/values/${nextValue.icon}`}
                alt={`${nextValue.title} and justice GIF image`}
                width={460}
                height={460}
                unoptimized={true}
              />
              <h3 className="main-title">{nextValue.title}</h3>
            </li>
          </ul>
        </div>
      </section>

      {/* team section */}
      <section className="container-fluid section recent-articles-container">
        <div className="articles-warper">
          <h4 className="sub-title">Our Team</h4>
          <h1 className="main-title">The Faces Behind Our Success</h1>
          {/*team cards */}
          <div className="cards-warper">
            <TeamCard name="Dr.Suad Abdalla" thumbnail="director_2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ipsam quasi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex, illo! Quisquam, laboriosam quidem?
            </TeamCard>

            <TeamCard name="Mr.Mohamed Musa" thumbnail="director_1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ipsam quasi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex, illo! Quisquam, laboriosam quidem?
            </TeamCard>

            <TeamCard name="Mrs.Faridah Kulumba" thumbnail="director_3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ipsam quasi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex, illo! Quisquam, laboriosam quidem?
            </TeamCard>
          </div>
        </div>
      </section>
    </main>
  );
}
