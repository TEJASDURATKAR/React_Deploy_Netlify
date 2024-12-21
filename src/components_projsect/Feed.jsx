import React from 'react'
import PostComp from './PostComp'


const Feed = ({posts}) => {
  return (
    <>
      {
        posts.map(post =>(
            <PostComp key={post.id} post={post}/>
        ))
      }
    </>
  )
}

export default Feed
