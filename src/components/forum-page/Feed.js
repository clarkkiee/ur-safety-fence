import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import {useState, useEffect} from "react"
import db from "./firebase"

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {/* Post */}
      {posts.map(post => (
          <Post
            displayName= {post.displayName}
            userName = {post.username}
            verified = {post.verified}
            text = {post.text}
            image = {post.image}
            avatar = {post.avatar}
          />
      ))}


    </div>
  );
}

export default Feed;
