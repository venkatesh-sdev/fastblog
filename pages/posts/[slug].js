import { data } from "autoprefixer";
import React from "react";
import { AuthorInfo, BlogBody, LinkedBlogCardContainer } from "../../components";
import { sanityClient, urlBuilder } from "../../santiy";

const PostDetails = ({ post, posts }) => {
  return (
    <main className="max-w-7xl mx-auto">
      <img
        src={urlBuilder(post.mainImage).url()}
        alt="bannerImage"
        className="block w-screen h-64 object-cover object-center"
      />
      <AuthorInfo post={post} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center font-medium py-2">
        {post.title}
      </h1>
      <BlogBody post={post} />
      <div className="grid  justify-center items-center py-5">
      <LinkedBlogCardContainer posts={posts} heading="Related to Authors" />
      </div>
    </main>
  );
};

export default PostDetails;

export const getServerSideProps = async ({ query }) => {

  const queryFetch = `*[_type=="post" && slug.current == $slug][0]{
    _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      publishedAt,
      body
  }`;
  const dataQuery = `*[_type=="post"]{
    _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      publishedAt,
      body
  }`;

  const posts = await sanityClient.fetch(dataQuery);
  const post = await sanityClient.fetch(queryFetch, {
    slug: query?.slug,
  });

  return {
    props: {
      post,
      posts,
    },
  };
};
