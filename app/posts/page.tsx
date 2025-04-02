'use client';
import React, { useEffect, useState } from "react";
import BreadCrumb from "@/app/components/breadcrumb/breadcrumb";
import { FeaturedPostCard, PostCard } from "@/app/components/cards/cards";
import { PostCardParams } from "../utils/interfaces/interfaces";
import { Button } from "../components/buttons/buttons";
import { SolidIcons } from "../components/icons/icons";
import NavBar from "../components/navbar/navbar";
import { InView } from "react-intersection-observer";


const featuredPost: PostCardParams[] = [
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/war-diseases-and-how-to-overcome-it",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/water-is-out-on-sudan",
    lastUpdate: "27 Dec 2023",
  },
];
const posts: PostCardParams[] = [
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/war-diseases-and-how-to-overcome-it",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/water-is-out-on-sudan",
    lastUpdate: "27 Dec 2023",
  },
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },
  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "#",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Culture',
    title: 'Knitting In Africa History',
    thumbnail: '/images/posts/post_1.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus?",
    link: "/posts/knitting-in-africa-history",
    lastUpdate: "22 Dec 2023",
  },

  {
    category: 'Education',
    title: 'The History of Algebra',
    thumbnail: '/images/posts/post_2.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "/posts/the-history-of-algebra",
    lastUpdate: "27 Dec 2023",
  },
  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },
  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },
  {
    category: 'Health Care',
    title: 'War Diseases, And How To Over-Come It',
    thumbnail: '/images/posts/post_3.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  },

  {
    category: 'Crisis',
    title: 'Water is Out On Sudan',
    thumbnail: '/images/posts/post_4.jpg',
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis consequuntur quasi illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "#",
    lastUpdate: "27 Dec 2023",
  }
]

export default function Posts() {
  const [breadcrumb, setBreadCrumb] = useState({
    self: "Causes",
    ancestors: [
      { title: 'Home', link: '/' },
    ]
  })

  useEffect(() => {
    const filterMenu = document.querySelector('.filters-menu');
    const filterMenuToggler = document.querySelector('.toggle-filter');
    let currentState = "scale_out";

    filterMenuToggler?.addEventListener('click', (event) => {
      filterMenu?.classList.remove(currentState);
      currentState === "scale_out" ? currentState = "scale_in" : currentState = "scale_out";
      filterMenu?.classList.add(currentState);
      console.log(currentState);
    })
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <BreadCrumb self={breadcrumb.self} ancestors={breadcrumb.ancestors} />
      {/* featured post */}
      <section className="container-fluid featured-posts">
        <h4 className="sub-title">Featured Posts</h4>
        <h1 className="main-title">Spotlight on Change: Our Featured Insights</h1>

        <div className=" section-md featured-posts-container">
          <Button className="arrow-left"><SolidIcons icon="arrow-right" className="icon" /></Button>
          <ul className="posts-menu featured-posts-menu">
            {featuredPost.map((post, index) => {
              return (
                <li key={index} className="featured-post-item">
                  <FeaturedPostCard {...post} />
                </li>
              )
            })}
          </ul>
          <Button className="arrow-right"><SolidIcons icon="arrow-right" className="icon" /></Button>
          <div className="featured-post-arrow-sm">
            <Button className="arrow-left-sm"><SolidIcons icon="arrow-right" className="icon" /></Button>
            <Button className="arrow-right-sm"><SolidIcons icon="arrow-right" className="icon" /></Button>
          </div>
        </div>
      </section>

      {/* filter section */}
      <section className="container-fluid section section-md">
        <h4 className="sub-title">Posts</h4>
        <h1 className="main-title">Our Latest Insights</h1>

        {/* filters */}
        <div className="filter-posts-container">
          <div className="filters-warper">
            {/* filter icon on small screen */}
            <Button className="toggle-filter"><SolidIcons icon="filter" className="filter-icon" /> <span className="sr-only">Toggle Filters</span> </Button>
            {/* filters menu, relative and fixed on small screen */}
            <ul className="filters-menu">
              <li className="filter-item active">
                <Button className="active" onClick={() => { }}>All</Button>
              </li>
              <li className="filter-item">
                <Button onClick={() => { }}>Crisis</Button>
              </li>
              <li className="filter-item">
                <Button onClick={() => { }}>Culture</Button>
              </li>
              <li className="filter-item">
                <Button onClick={() => { }}>Education</Button>
              </li>
              <li className="filter-item">
                <Button onClick={() => { }}>CultureHealth Care</Button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* all post limited to 9 and infinite scroll*/}
      <section className="container-fluid recent-articles-container posts-container">
        <div className="articles-warper">
          <div className="cards-warper">
            <ul className="posts-warper">
              {posts.map((post, index) =>
                // <li className="post-item" key={index}>
                //   <PostCard {...post} />
                // </li>
                <InView as="li" className={`post-item delay-${(index + 1) * 150}`} threshold={0.25} key={index} onChange={(inView, entry) =>
                  inView && entry.target.classList.add('slide-bottom')
                }>
                  <PostCard {...post} />
                </InView>
              )}
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}