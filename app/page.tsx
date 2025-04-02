"use client";
// import styles from "./page.module.sass";
import React from "react";
import { InView, useInView } from "react-intersection-observer";
import { SolidIcons } from "@/app/components/icons/icons";
import { Button } from "./components/buttons/buttons";
import { ProgramCard, TeamCard, PostCard } from "./components/cards/cards";
import AboutUs from "./components/about-us-hero/about_us_hero";
import MissionSlider from "./components/sliding-mession/sliding-mission";

const programs = [
  {
    title: "Education",
    icon: "education.png",
    link: "/posts/education",
  },
  {
    title: "Health",
    icon: "health.png",
    link: "/posts/health",
  },
  {
    title: "Culture",
    icon: "culture.png",
    link: "/posts/culture",
  },
  {
    title: "Crisis",
    icon: "emergency.png",
    link: "/posts/emergency",
  },
];

const posts = [
  {
    category: "Culture",
    title: "Knitting In Africa History",
    thumbnail: "/images/posts/post_1.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "#",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: "Education",
    title: "The History of Algebra",
    thumbnail: "/images/posts/post_2.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: "Health Care",
    title: "War Diseases, And How To Over-Come It",
    thumbnail: "/images/posts/post_3.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: "Crisis",
    title: "Water is Out On Sudan",
    thumbnail: "/images/posts/post_4.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },
];

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="container-fluid header-container">
        <div className="header-warper">
          <InView
            as="div"
            className="col-12 col-md-6 header-title-col"
            threshold={1}
            onChange={(inView, entry) =>
              inView && entry.target.classList.add("slide-left")
            }
          >
            <h1 className="primary-title">
              We&apos;re on a mission to{" "}
              <span className="primary-title">change</span>
            </h1>
            <h3 className="secondary-title">
              Around 431 million Africans are living below extreme poverty and
              underprivileged
            </h3>
            {/* actions button */}
            <div className="header-actions">
              <Button href="/donate" className="solid-btn-primary">
                Join the Movement
              </Button>
              <Button href="/join" className="outline-btn">
                Learn More
              </Button>
            </div>
          </InView>
          <InView
            as="div"
            className="col-md-6 header-side-image"
            threshold={1}
            onChange={(inView, entry) => {
              console.log(`The ${entry.target} is 
            ${inView} visble`);
              inView && entry.target.classList.add("slide-right");
            }}
          >
            <div className="floating-items floating-icon-container">
              <SolidIcons icon="hand-heart" className="floating-icon" />
            </div>
            <div className="floating-items floating-icon-container">
              <SolidIcons icon="people-roof" className="floating-icon" />
            </div>
            <div className="floating-items floating-icon-container">
              <SolidIcons icon="user-graduate" className="floating-icon" />
              <SolidIcons icon="user-graduate" className="floating-icon" />
              <SolidIcons icon="user-graduate" className="floating-icon" />
            </div>
            <div className="floating-items floating-icon-container">
              <SolidIcons icon="baby" className="floating-icon" />
            </div>
          </InView>
        </div>
      </div>
      {/* articles catagories cards */}
      <div className="container-fluid programs-hero">
        <div className="programs-warper">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              icon={`/images/icons/${program.icon}`}
              link={program.link}
            />
          ))}
        </div>
      </div>

      {/* about us */}
      <div className="container-fluid about-us-hero">
        <AboutUs />
      </div>

      {/* recent articles */}
      <div className="container-fluid recent-articles-container">
        <div className="articles-warper">
          <h4 className="sub-title">Recently added posts</h4>
          <h1 className="main-title">Keep Updated by our recent articles</h1>
          {/* recent articles cards */}
          <div className="cards-warper">
            <ul className="posts-warper section">
              {posts.map((post, index) => (
                <InView
                  as="li"
                  className={`post-item delay-${(index + 1) * 250}`}
                  threshold={0.25}
                  key={index}
                  onChange={(inView, entry) =>
                    inView && entry.target.classList.add("slide-bottom")
                  }
                >
                  <PostCard {...post} />
                </InView>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* focus and goals */}
      <div className="container-fluid about-us-hero">
        <MissionSlider />
      </div>
      {/* our team */}
      <div className="container-fluid recent-articles-container">
        <div className="articles-warper">
          <h4 className="sub-title">Our Team</h4>
          <h1 className="main-title">The Faces Behind Our Success</h1>
          {/*team cards */}
          <div className="cards-warper team-card-warper">
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
      </div>
    </>
  );
}
