import React from 'react';
import "./Side.css";
import { Link } from 'react-router-dom';

function Side() {
  const username = "vikramsharma20025";
  const fname = "vikram";
  const lname = "sharma";
  const switchaccount=()=>{};
  return (
    <div className='Side'>
      <div className='currentuser'>
        <div className='img-user-div'>
          <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='userprofilepicture' />
        </div>
        <div className='userinfo'>
          <h4>{username}</h4>
          <h5>{fname} {lname}</h5>
        </div>
        <div className='switch-button'>
          <button id='myBtn' onClick={switchaccount}>Switch</button>
        </div>
      </div>
      <div className='suggested_div'>
        <h4>Suggested for you</h4>
      </div>
      <div id='myModal' className='switch-account-modal'>
        <div className='header-modal'>
          <h4>Switch accounts</h4>
          <span className='close'>&times;</span>
        </div>
        <div className='currentuser-switch'>
          <div className='img-user-div-switch'>
            <img src='https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?size=338&ext=jpg' alt='userprofilepicture' />
          </div>
          <div className='userinfo-switch'>
            <h4>{username}</h4>
            {/* <h5>{fname} {lname}</h5> */}
          </div>
        </div>
        <Link to={'/login'}>
          Log into an existing account
        </Link>
      </div>
      
    </div>
  );
}

export default Side;