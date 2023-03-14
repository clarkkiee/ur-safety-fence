import React from 'react'
import "./Widgets.css"
import { Search } from '@mui/icons-material'
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets-input'>
          <Search className='widgets-searchIcon' />
          <input className="input-widgets" placeholder='Search Topics' type="text"/>
        </div>

        <div className='widgets-widgetContainer'>
          <h2>What's happening?</h2>

          <TwitterTweetEmbed tweetId={"1623246646611165184"}/>

          <TwitterTimelineEmbed
            sourceType = "profile"
            screenName = "AloysiusJuan3"
            options={{height: 400}}
          />
          
          <TwitterShareButton
            url={'https://instagram.com/juanfarrelllumentut'}
            options={{ text: '#reactjs is awesome', via: 'pentolbakarbelummatang' }}
          />



        </div>
    </div>
  )
}

export default Widgets