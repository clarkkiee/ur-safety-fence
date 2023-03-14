import React from 'react'
import "./Tweetbox.css"
import { Avatar, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import db from './firebase';

function Tweetbox() {

  const [sendMessage, setSendMessage] = useState("");
  const [sendImage, setSendImage] = useState("");

  const postMessage = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Aloysius Juan",
      username: "emyuselalumenang",
      verified: true,
      text: sendMessage,
      image: sendImage,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    });

    setSendMessage("");
    setSendImage("");

  }

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox-input">
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
                <input 
                onChange={(e) => setSendMessage(e.target.value)}
                value = {sendMessage}
                placeholder="What's happening?" 
                type="text" />
            </div>
            <input 
                onChange={(e) => setSendImage(e.target.value)}
                value = {sendImage}
                className="tweetBox-inputImage" 
                placeholder="Optional: Enter Image URL" 
                type="text" />
            <Button onClick={postMessage} type="submit" className='tweetButton'>Send</Button>
           
        </form>
    </div>
  )
}

export default Tweetbox