import { PostsPage } from "./page.posts";

export default function Posts() {
  return <PostsPage />;
}

export function generateMetadata() {
  return {
    title: "Posts | Causes",
    description:
      "Explore our latest insights and articles on various topics including culture, education, health care, and crisis.",
    openGraph: {
      title: "Posts | Causes",
      description:
        "Explore our latest insights and articles on various topics including culture, education, health care, and crisis.",
      images: [
        {
          url: "/images/common_header.png",
          width: 1200,
          height: 630,
          alt: "Causes Posts",
        },
      ],
    },
  };
}
