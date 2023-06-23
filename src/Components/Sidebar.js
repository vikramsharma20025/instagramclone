import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';


function Sidebar(){
  const searchuse=()=>{};
  const shownotifications=()=>{};
  const createpost=()=>{};
  return (
    <div className='this'>
      <img src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' alt='instagram written logo' id='logo-insta-header'/>
      <Link to={'/'}>
        <div className='navbar-items'>
          <HomeIcon fontSize='large'/><h3>Home</h3>
        </div>
      </Link>
      <button onClick={searchuse}>
        <div className='navbar-items'>
          <SearchOutlinedIcon fontSize='large'/>
          <h3>Search</h3>
        </div>
        </button>
      <Link to={'/explore'}>
        <div className='navbar-items'>
          <ExploreOutlinedIcon fontSize='large'/>
          <h3>Explore</h3>
        </div>
      </Link>
      <Link to={'/reels'}>
        <div className='navbar-items'>
          <OndemandVideoOutlinedIcon fontSize='large'/>
          <h3>Reels</h3>
        </div>
      </Link>
      <Link to={'/direct/inbox'}>
        <div className='navbar-items'>
          <ChatBubbleOutlineOutlinedIcon fontSize='large'/>
          <h3>Messages</h3>
        </div>
      </Link>
      <button onClick={shownotifications}>
        <div className='navbar-items'>
          <FavoriteBorderOutlinedIcon fontSize='large'/>
          <h3>Notifications</h3>
        </div>
      </button>
      <button onClick={createpost}>
        <div className='navbar-items'>
          <AddBoxOutlinedIcon fontSize='large'/>
          <h3>Create</h3>
        </div>
      </button>
    </div>
  );
}

export default Sidebar;