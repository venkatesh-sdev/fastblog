import React from "react";
import {AuthorInfo} from "../../components";
import { sanityClient, urlBuilder } from "../../santiy";

const PostDetails = ({ post }) => {
  return (
    <main className="max-w-7xl mx-auto">
    <AuthorInfo post={post}/>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center font-medium py-2">{post.title}</h1>
    </main>
  );
};

export default PostDetails;





export const getServerSideProps = async ({ query }) => {
  console.log(query);

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

  const post = await sanityClient.fetch(queryFetch, {
    slug: query?.slug,
  });

  return {
    props: {
      post,
    },
  };
};

// <div className="max-w-xl mx-auto mb-10 object-center">
//     <img src={urlBuilder(post.mainImage).url()} alt="BannerImage" className="max-w-xl object-cover"/>
//   </div>
// // 