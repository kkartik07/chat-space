import { Avatar } from '@mui/material';
import React from 'react'
import '../stylesheets/SidebarChat.css'

function SidebarChat() {
    return (
        <div className='sidebar-chat'>
            <Avatar />
            <div className='sidebarChat-info'>
                <h4>Grp name</h4>
                <p>This message was deleted</p>
            </div>
        </div>
    )
}

export default SidebarChat;
