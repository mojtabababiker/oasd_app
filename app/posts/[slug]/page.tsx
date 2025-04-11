import BreadCrumb from "@/app/components/breadcrumb/breadcrumb";
import { PostCardParams } from "@/app/utils/interfaces/interfaces";
import {
  fetchPost,
  fetchRelatedPosts,
  getFeaturedPosts,
} from "@/app/utils/scripts/posts_api";
import { notFound } from "next/navigation";
import { Button } from "@/app/components/buttons/buttons";
import FeaturedPosts from "@/app/components/posts/FeaturedPosts";
import FeaturedPostsSlider from "@/app/components/posts/FeaturedPostsSlider";

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
      <FeaturedPostsSlider featuredPosts={featuredPosts} />
    </>
  );
}
