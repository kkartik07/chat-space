import React from 'react'
import '../stylesheets/Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, MoreVert, Search, InsertEmoticon, DoubleArrow } from '@mui/icons-material'
function Chat() {
    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar />
                <div className='chat-header-info'>
                    <h3> Chat Name</h3>
                    <p>Last</p>
                </div>

                <div className='chat-header-buttons'>
                    <IconButton>
                        <Search />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat-body'>
                <p className='recieved-message'>
                    <span className='chat-name'>KArik</span>
                    jd fjefjw wwwjwb wfw
                    <span className='timestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='recieved-message'>
                    <span className='chat-name'>KArik</span>
                    jd fjefjw wwwjwb wfw
                    <span className='timestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='sent-message recieved-message'>
                    <span className='chat-name'>KArik</span>
                    jd fjefjw wwwjwb wfw
                    <span className='timestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='sent-message recieved-message'>
                    <span className='chat-name'>KArik</span>
                    jd fjefjw wwwjwb wfw
                    <span className='timestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='recieved-message'>
                    <span className='chat-name'>KArik</span>
                    jd fjefjw wwwjwb wfw
                    <span className='timestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='sent-message recieved-message'>
                    <span className='chat-name'>KArik</span>
                    jd fjefjw wwwjwb wfw
                    <span className='timestamp'>{new Date().toUTCString()}</span>
                </p>

            </div>
            <form className='input-footer'>
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <input placeholder='Type something...' className='typespace' />
                <button type='submit'>
                    <IconButton className='send-btn'>
                        <DoubleArrow />
                    </IconButton>
                </button>
            </form>

        </div>
    )
}

export default Chat
