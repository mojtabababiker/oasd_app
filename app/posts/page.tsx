"use client";
import React, { useEffect, useState, useRef } from "react";
import BreadCrumb from "@/app/components/breadcrumb/breadcrumb";
import { FeaturedPostCard, PostCard } from "@/app/components/cards/cards";
import FeaturedPostsSlider from "@/app/components/posts/FeaturedPostsSlider";
import { PostCardParams } from "../utils/interfaces/interfaces";
import { Button } from "../components/buttons/buttons";
import { SolidIcons } from "../components/icons/icons";
import NavBar from "../components/navbar/navbar";
import { InView } from "react-intersection-observer";

const featuredPost: PostCardParams[] = [
  {
    category: "Culture",
    title: "Knitting In Africa History",
    thumbnail: "/images/posts/post_1.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: "Education",
    title: "The History of Algebra",
    thumbnail: "/images/posts/post_2.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: "Health Care",
    title: "War Diseases, And How To Over-Come It",
    thumbnail: "/images/posts/post_3.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/war-diseases-and-how-to-overcome-it",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: "Crisis",
    title: "Water is Out On Sudan",
    thumbnail: "/images/posts/post_4.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/water-is-out-on-sudan",
    lastUpdate: "27 Dec 2023",
  },
];
const posts: PostCardParams[] = [
  {
    category: "Culture",
    title: "Knitting In Africa History",
    thumbnail: "/images/posts/post_1.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: "Education",
    title: "The History of Algebra",
    thumbnail: "/images/posts/post_2.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: "Health Care",
    title: "War Diseases, And How To Over-Come It",
    thumbnail: "/images/posts/post_3.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/war-diseases-and-how-to-overcome-it",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: "Crisis",
    title: "Water is Out On Sudan",
    thumbnail: "/images/posts/post_4.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/water-is-out-on-sudan",
    lastUpdate: "27 Dec 2023",
  },
  {
    category: "Culture",
    title: "Knitting In Africa History",
    thumbnail: "/images/posts/post_1.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: "Education",
    title: "The History of Algebra",
    thumbnail: "/images/posts/post_2.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },
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
    category: "Culture",
    title: "Knitting In Africa History",
    thumbnail: "/images/posts/post_1.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: "Education",
    title: "The History of Algebra",
    thumbnail: "/images/posts/post_2.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
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

const programFilters = [
  {
    title: "All",
    filter: null,
  },
  {
    title: "Crisis",
    filter: "crisis",
  },
  {
    title: "Culture",
    filter: "culture",
  },
  {
    title: "Education",
    filter: "education",
  },
  {
    title: "Health Care",
    filter: "health-care",
  },
];

export default function Posts() {
  const [breadcrumb, setBreadCrumb] = useState({
    self: "Causes",
    ancestors: [{ title: "Home", link: "/" }],
  });
  const [programFilter, setProgramFilter] = useState<string | null>(null);

  useEffect(() => {
    const filterMenu = document.querySelector(".filters-menu");
    const filterMenuToggler = document.querySelector(".toggle-filter");
    let currentState = "scale_out";

    filterMenuToggler?.addEventListener("click", (event) => {
      filterMenu?.classList.remove(currentState);
      currentState === "scale_out"
        ? (currentState = "scale_in")
        : (currentState = "scale_out");
      filterMenu?.classList.add(currentState);
      console.log(currentState);
    });
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <BreadCrumb self={breadcrumb.self} ancestors={breadcrumb.ancestors} />
      {/* featured post */}
      <FeaturedPostsSlider featuredPosts={featuredPost} />

      {/* filter section */}
      <section className="container-fluid section section-md">
        <h4 className="sub-title">Posts</h4>
        <h1 className="main-title">Our Latest Insights</h1>

        {/* filters */}
        <div className="filter-posts-container">
          <div className="filters-warper">
            {/* filter icon on small screen */}
            <Button className="toggle-filter">
              <SolidIcons icon="filter" className="filter-icon" />{" "}
              <span className="sr-only">Toggle Filters</span>{" "}
            </Button>
            {/* filters menu, relative and fixed on small screen */}
            <ul className="filters-menu">
              {programFilters.map((program, index) => (
                <li className="filter-item" key={index}>
                  <Button
                    className={program.filter === programFilter ? "active" : ""}
                    onClick={() => {
                      setProgramFilter(program.filter);
                    }}
                  >
                    {program.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* all post limited to 9 and infinite scroll*/}
      <section className="container-fluid recent-articles-container posts-container">
        <div className="articles-warper">
          <div className="cards-warper">
            <ul className="posts-warper">
              {posts.map((post, index) => (
                <li
                  key={`${index}-${post.title}`}
                  className={`${
                    programFilter &&
                    programFilter !== post.category.toLowerCase()
                      ? "hidden-post"
                      : "visible-post"
                  }`}
                >
                  <PostCard {...post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
