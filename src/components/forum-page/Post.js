import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
import tesimg from "./assets/tes-post.jpg"

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className = "post-avatar">
            <Avatar src= {avatar}/>
        </div>
        <div className="post-body">
            <div className="post-header">
                <div className='post-header-text'>
                    <h3>
                        {displayName} <span>
                            <span className="post-headerSpecial">
                                {verified && <VerifiedUser className="post-badge"/>} @{userName}
                            </span>
                        </span>
                    </h3>
                </div>
                <div className="post-headerDesc">
                    <p>{text}</p>
                </div>
            </div>
            {image && <img src={image} />}
            <div className="post-footer">
                <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small'/>
                    <Publish fontSize='small'/>
            </div>  
        </div>
    </div>
  )
}

export default Post