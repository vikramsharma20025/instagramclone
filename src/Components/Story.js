import React,{ useState } from 'react';
import "./Story.css";
import { Link } from 'react-router-dom';
import Storyitem from './Storyitem';
  
function Story() {
  const [story,setStory] = useState([]);
  return (
    <div className='Story'>
      <div className='story-divs'>
        {story.map(story=>(
          <Storyitem key={story.id} id={story.id} name={story.data.username} />
        ))}
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        <div className='storyitem'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='wow' />
          <small>vikramsharma20025</small>
        </div>
        
      </div>
    </div>
  )
}

export default Story;