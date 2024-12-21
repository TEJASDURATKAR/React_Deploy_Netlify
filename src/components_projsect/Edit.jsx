import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Edit({
  posts,
  handleEdit,
  editTitle,
  editBody,
  setEditBody,
  setEditTitle
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the post by id
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      // Set the post data to the form fields when the component mounts
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  // Handle form submit to edit the post
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: post.id, // Use the original post ID
      title: editTitle,
      body: editBody,
      datetime: new Date().toLocaleString(),
    };
    handleEdit(updatedPost);
    navigate('/'); // Redirect to home after submission
  };

  return (
    <div className="container">
      <main className="newPost">
        <h3>Edit Post</h3>
        {post ? (
          <form onSubmit={(e)=>e.preventDefault()}>
            {/* Title Input */}
            <label htmlFor="editTitle">Title:</label>
            <input
              id="editTitle"
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />

            {/* Body Input */}
            <label htmlFor="editBody">Body:</label>
            <textarea
              id="editBody"
              rows="10"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
            ></textarea>

            {/* Submit Button */}
            <button type="submit" onClick={()=>handleEdit(post.id)}>Update Post</button>
          </form>
        ) : (
            <>
          <p>Post not found!</p>
          <Link to='/'>Visit Home Page</Link>
          </>
        )}
      </main>
    </div>
  );
}

export default Edit;
