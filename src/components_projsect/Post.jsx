import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Styles/Post.css'

const Post = ({ posts, handleDelete ,handleEdit }) => {
  const { id } = useParams();
  const post = posts?.find(post => (post.id).toString() === id);

  if (!posts) {
    return <p>Loading posts...</p>; // Fallback for undefined posts
  }

  return (
    <main className="postPage">
      <article className="post">
        {post ? (
          <>
          <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`edit/${post.id}`}><button className='editButton'>Update  Post</button></Link>
            <button  className='deleteButton' onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        ) : (
          <p>Post not found!</p> // Fallback for invalid `id`
        )}
      </article>
    </main>
  );
};

export default Post;
