
import React, { useState } from 'react';
import "./Posts.css";
import Postitem from './Postitem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from 'react-router-dom';

function Posts() {
  // const [noofcomments,setnoofComments] = useState("");
  const noofcomments = 239;
  const [input,setInput] = useState("");
  const caption = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  const [posts,setPosts] = useState([]);
  const sendMessage=(e)=>{
    e.preventDefault();
    console.log("You typed >>>",input);
    // db.collection("rooms").doc(roomId).collection("messages").add({
    //   message:input,
    //   name:user.displayName,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    setInput("");
  };
  // noofcomments = 239;
  return (
    <div className='posts-list'>
      <div className='posts-component'>
        {posts.map(post=>(
          <Postitem key={post.id} id={post.id} name={post.data.username} />
        ))}
        <div className='postitem-header'>
          <div className='post-item-user-info'>
            <img id='post-item-profile' src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
            <b id='username'>vikramsharma20025</b>
            <b id='timestamp'>1d</b>
          </div>
          <MoreHorizIcon style={{marginTop:'6px',}}/>
        </div>
        <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
        <div className='like-comment-share-bookmark'>
          <div className='like-comment-share'>
            <FavoriteBorderIcon fontSize='large'/>
            <FavoriteIcon fontSize='large' style={{color:'red'}}/>
            <ChatBubbleOutlineIcon fontSize='large'/>
            <SendOutlinedIcon fontSize='large'/>
          </div>
          <div className='bookmark'>
            <BookmarkBorderOutlinedIcon fontSize='large'/>
            <BookmarkIcon fontSize='large'/>
          </div>
        </div>
        <div className='likes'>
          <b>20,951 likes</b>
        </div>
        <div className='caption'>
          <b id='username'>vikramsharma20025</b>
          {caption}
        </div>
        <div className='comment'>
          <Link to={'/post/{id}'}>
            View all {noofcomments} comments
          </Link>
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type='text' placeholder='Add a comment'/>
            <button onClick={sendMessage}>Send a message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Posts;
