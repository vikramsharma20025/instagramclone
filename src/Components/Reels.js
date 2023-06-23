import React from 'react';
import "./Reels.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton } from '@mui/material';

function Reels() {
  const username = "vikramsharma20025";
  const caption = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  const addedcaption = " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const send = () =>{};
  const comment = () =>{};
  const like = () =>{};
  const bookmark = () =>{};
  const more = () =>{};
  return (
    <div className='Reels'>
      <div className='reels-container'>
        <div className='zindexcontent'>
        <div className='reel-data'>
          {username}<br></br>
          {caption}...<div id='more' className='more'>more</div><div className='addedcaption'>{addedcaption}</div>
        </div>
        </div>
      </div>
      <div className='reel-sidebar'>
          <div className='sidebar-element'>
            <IconButton>
            <button onClick={like}>
              <FavoriteBorderOutlinedIcon fontSize='large'/>
            </button>
            </IconButton>
            {/* <h5>Like</h5> */}
          </div>
          <div className='sidebar-element'>
          <IconButton>
            <button onClick={comment}>
              <ModeCommentOutlinedIcon fontSize='large'/>
            </button>
          </IconButton>
            {/* <h5>Comment</h5> */}
          </div>
          <div className='sidebar-element'>
          <IconButton>
            <button onClick={send}>
              <SendIcon style={{transform:'rotate(-45deg)'}} fontSize='large'/>
            </button>
          </IconButton>
            {/* <h5>Share</h5> */}
          </div>
          <div className='sidebar-element'>
          <IconButton>
            <button onClick={bookmark}>
              <BookmarkBorderIcon fontSize='large'/>
            </button>
          </IconButton>
            {/* <h5>Share</h5> */}
          </div>
          <div className='sidebar-element'>
          <IconButton>
            <button onClick={more}>
            <MoreHorizIcon fontSize='large'/>
            </button>
          </IconButton>
            {/* <h5>More</h5> */}
          </div>
        </div>
    </div>
  );
}

export default Reels;