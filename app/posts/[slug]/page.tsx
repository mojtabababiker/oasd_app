import BreadCrumb from "@/app/components/breadcrumb/breadcrumb";
import { PostCardParams } from "@/app/utils/interfaces/interfaces";
import {
  fetchPost,
  fetchRelatedPosts,
  getFeaturedPosts,
} from "@/app/utils/scripts/posts_api";
import { notFound } from "next/navigation";
import { FeaturedPostCard } from "@/app/components/cards/cards";
import { Button } from "@/app/components/buttons/buttons";
import { SolidIcons } from "@/app/components/icons/icons";
import FeaturedPosts from "@/app/components/posts/FeaturedPosts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugTitle = slug
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  let post: PostCardParams;
  let relatedPosts: PostCardParams[];

  // getting post content from the api
  try {
    post = await fetchPost(slug);
    // console.log(post);
  } catch (error) {
    console.log(error);
    notFound();
  }
  // getting the related post from the api
  try {
    relatedPosts = await fetchRelatedPosts(post.category);
    // console.log(relatedPosts);
  } catch (error) {
    console.log(error);
    relatedPosts = [];
  }
  // getting the featured post
  const featuredPosts = await getFeaturedPosts();

  const breadcrumb = {
    self: slugTitle,
    ancestors: [
      { title: "Home", link: "/" },
      { title: "Causes", link: "/posts" },
      {
        title: post.category,
        link: `/posts?category=${post.category.toLowerCase()}`,
      },
    ],
  };
  // console.log(params);

  return (
    <>
      <BreadCrumb
        self={breadcrumb.self}
        ancestors={breadcrumb.ancestors}
        bgImage={`url(${post.thumbnail})`}
      />
      <section className="container-fluid section post-main">
        <article className="post-article">
          <h3 className="sub-title">Article</h3>
          <h2 className="primary-title">{slugTitle}</h2>
          <div className="post-meta">
            <h4 className="sub-title">{post.lastUpdate}</h4>
            <h6 className="sub-title">By {post.author || "------"}</h6>
          </div>
          <div className="post-content">{post.content || post.summary}</div>
        </article>
        <aside className="related-posts-aside">
          <h3 className="secondary-title">Related Articles</h3>
          <div className="related-posts-container">
            <ul className="related-posts-warper">
              {relatedPosts.map((post, index) => {
                return (
                  <FeaturedPosts
                    post={post}
                    key={index}
                    className={`featured-post-item delay-${(index + 1) * 150}`}
                  />
                );
              })}
            </ul>
            <Button
              href={`/posts?${post.category}`}
              className="solid-btn-primary"
            >
              See More
            </Button>
          </div>
        </aside>
      </section>
      {/* featured post */}
      <section className="container-fluid section featured-posts">
        <h4 className="sub-title">Featured Posts</h4>
        <h1 className="main-title">
          Spotlight on Change: Our Featured Insights
        </h1>

        <div className=" section-md featured-posts-container">
          <Button className="arrow-left">
            <SolidIcons icon="arrow-right" className="icon" />
          </Button>
          <ul className="posts-menu featured-posts-menu">
            {featuredPosts.map((post, index) => {
              return (
                <li key={index} className="featured-post-item">
                  <FeaturedPostCard {...post} />
                </li>
              );
            })}
          </ul>
          <Button className="arrow-right">
            <SolidIcons icon="arrow-right" className="icon" />
          </Button>
          <div className="featured-post-arrow-sm">
            <Button className="arrow-left-sm">
              <SolidIcons icon="arrow-right" className="icon" />
            </Button>
            <Button className="arrow-right-sm">
              <SolidIcons icon="arrow-right" className="icon" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
