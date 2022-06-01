import React from 'react'
import '../stylesheets/Sidebar.css'
//icons from material-ui
import { Avatar, IconButton } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src='https://avatars.githubusercontent.com/u/87076033?v=4' />
                <div className='sidebar-buttons'>
                    <IconButton>
                        <DataSaverOffIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='sidebar-search'>
                <div className='search-container'>
                    <input type='text' placeholder='Search...' />
                    <SearchIcon />
                </div>
            </div>

            <div className='sidebar-chats'>
                <h2>All Chats</h2>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div >
    )
}

export default Sidebar
