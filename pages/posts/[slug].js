import React from 'react'
import { sanityClient } from '../../santiy';

const PostDetails = ({value}) => {
  return (
    <div>
    post-{value}
    </div>
  )
}

export default PostDetails



export const getServerSideProps = async ({query}) => {
  return{
    props:{
      value:query?.slug,
    }
  }
};
