"use client";
import { useRef } from "react";
import { FeaturedPostParam } from "@/app/utils/interfaces/interfaces";
import { Button } from "@/app/components/buttons/buttons";
import { FeaturedPostCard } from "@/app/components/cards/cards";
import { SolidIcons } from "@/app/components/icons/icons";
type Props = {
  featuredPosts: FeaturedPostParam[];
};

function FeaturedPostsSlider({ featuredPosts }: Props) {
  const featuredPostRef = useRef<HTMLUListElement | null>(null);
  const scrollLeft = () => {
    if (featuredPostRef.current) {
      featuredPostRef.current.scrollLeft -= 260;
    }
  };

  const scrollRight = () => {
    if (featuredPostRef.current) {
      featuredPostRef.current.scrollLeft += 260;
    }
  };
  return (
    <section className="container-fluid section featured-posts">
      <div className="section-md title-container">
        <h4 className="sub-title ">Featured Posts</h4>
        <h1 className="main-title">
          Spotlight on Change: Our Featured Insights
        </h1>
      </div>

      <div className=" section-md featured-posts-container">
        <Button className="arrow-left" onClick={scrollLeft}>
          <SolidIcons icon="arrow-right" className="icon" />
        </Button>
        <ul ref={featuredPostRef} className="posts-menu featured-posts-menu">
          {featuredPosts.map((post, index) => {
            return (
              <li key={index} className="featured-post-item">
                <FeaturedPostCard {...post} />
              </li>
            );
          })}
        </ul>
        <Button className="arrow-right" onClick={scrollRight}>
          <SolidIcons icon="arrow-right" className="icon" />
        </Button>
        <div className="featured-post-arrow-sm">
          <Button className="arrow-left-sm" onClick={scrollLeft}>
            <SolidIcons icon="arrow-right" className="icon" />
          </Button>
          <Button className="arrow-right-sm" onClick={scrollRight}>
            <SolidIcons icon="arrow-right" className="icon" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPostsSlider;
