"use client";

import { PostCardParams } from "@/app/utils/interfaces/interfaces";
import { InView } from "react-intersection-observer";
import { FeaturedPostCard } from "../cards/cards";

type Props = {
  post: PostCardParams;
  className?: string;
  key?: number;
};

function FeaturedPosts({ post, className, key }: Props) {
  return (
    <InView
      as="li"
      className={className}
      threshold={0.25}
      key={key}
      onChange={(inView, entry) =>
        inView && entry.target.classList.add("slide-bottom")
      }
    >
      <FeaturedPostCard {...post} />
    </InView>
  );
}

export default FeaturedPosts;
