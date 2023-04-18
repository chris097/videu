import React from 'react'
import ChannelButton from '../ChannelButton/ChannelButton'
import Header from '../Header/Header'
import Message from '../Message/Message'
import Participants from '../Participants/Participants'

const Channel = () => {

  return (
      <div>
          <Header />
          <Participants />
          <Message />
          <ChannelButton />
    </div>
  )
}

export default Channel