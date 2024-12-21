import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components_projsect/Header";
import About from "./components_projsect/About";
import NewPost from "./components_projsect/NewPost";
import Navbar from "./components_projsect/Navbar";
import Home from "./components_projsect/Home";
import Post from "./components_projsect/Post";
import Missing from "./components_projsect/Missing";
import Footer from "./components_projsect/Footer";
import api from "./components_projsect/api/posts";
import Edit from "./components_projsect/Edit";

const App = () => {
  const [postTitle, setPostTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(posts);
  const navigate = useNavigate();

  //Fetch the Posts data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`http://localhost:5000/posts`);
        const result = response.data;
        console.log("------post data----------");
        console.log(result);
        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
      try{
        await api.delete(`/posts/${id}`);
        const postList = posts.filter((post) => post.id !== id); // Remove post from local state
        setPosts(postList); // Update state
        navigate("/"); // Redirect to home
      }catch (error) {
        console.log('----error from delete----',error);
      }
  
  };

  //Update the post
  const handleEdit = async (id) => {
    const updatePost = {
      id: id, // Ensure you use the correct id (not posts.length + 1)
      title: postTitle,
      body: postBody,
      datetime: new Date().toLocaleString(),
    }; 
    try {
      const response = await api.put(`/posts/${id}`, updatePost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditBody('');
      setEditTitle('');
      navigate('/');
    } catch (error) {
      console.log('Error from updating post:', error);
    }
  };
  
  
  //filtered the posts
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) // Include title in search
    );
    setSearchResults(filteredResults);
  }, [posts, searchQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1, // Use incremental numeric ids
      title: postTitle,
      body: postBody,
      datetime: new Date().toLocaleString(),
    };
  
    try {
      const response = await api.post('/posts', newPost);  // Post to the correct endpoint
      const createdPost = response.data;
      setPosts([...posts, createdPost]);  // Add the new post to the state
      setPostTitle("");  // Reset title
      setPostBody("");   // Reset body
      navigate("/");     // Navigate back to the homepage
    } catch (error) {
      console.error("Error from submitting the post:", error);
    }
  };
  
  
  return (
    <div className="App">
      <Header title="React js Blogs" />
      <Navbar search={searchQuery} setSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />

        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              setPostTitle={setPostTitle}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Edit
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              setPostTitle={setPostTitle}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<Post posts={posts}  handleDelete={handleDelete}  />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
