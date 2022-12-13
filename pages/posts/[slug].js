import React from 'react'
import { sanityClient } from '../../santiy';

const PostDetails = ({post}) => {
  console.log(post);
  return (
    <div>
    
    </div>
  )
}

export default PostDetails



export const getServerSideProps = async ({query}) => {

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

  const post = await sanityClient.fetch(queryFetch,{
    slug:query?.slug
  })

  return{
    props:{
      post,
    }
  }
};
