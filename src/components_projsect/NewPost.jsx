import React from "react";
import './Styles/NewPost.css'

function NewPost({
  handleSubmit,
  setPostTitle,
  postTitle,
  postBody,
  setPostBody,
}) {
  return (
    <>
    <div className="container">
    <main className="newPost">
      <h3>New Post</h3>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />

        {/* Body Input */}
        <label htmlFor="postBody">Posts:</label>
        <textarea
          id="postBody"
          rows="10"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Add Post</button>
      </form>
    </main>
    </div>
    </>
  );
}

export default NewPost;
