import React from 'react'
import '../stylesheets/Sidebar.css'
import Chat from '../icons/chat.png'
import Donut from '../icons/Donut.png'
import Dots from '../icons/dots.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='sidebar-buttons'>
                    <img src={Chat} alt='chat'></img>
                    <img src={Donut} alt='chat'></img>
                    <img src={Dots} height={25} alt='chat'></img>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
