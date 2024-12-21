import React from 'react'
import { Link } from 'react-router-dom'



const PostComp = ({post}) => {
  return (
    <article className='post'>
      <Link to={`/post/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.datatime}</p>
      </Link>
      <p>{
        (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}`
        }</p>
    </article>
  )
}

export default PostComp
