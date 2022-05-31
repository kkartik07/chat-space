import React from 'react'
import '../stylesheets/Sidebar.css'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='sidebar-buttons'>
                    <CommentRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
