// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import Chats from './Components/Chats';
import Explore from './Components/Explore';
import Reels from './Components/Reels';
import Login from './Components/Login';
import Postbig from './Components/Postbig';
import Profile from './Components/Profile';

function App(){
  return (
    <div className="App">
      <div className='app__body'>
        <Router>
          <Routes>
            <Route path="/" element={[<Sidebar />,<Body />]}></Route>
            <Route path="/search" element={[<Sidebar />,<Search />]}></Route>
            <Route path="/direct/inbox" element={[<Sidebar />,<Chats />]}></Route>
            <Route path="/explore" element={[<Sidebar />,<Explore />]}></Route>
            <Route path="/reels" element={[<Sidebar />,<Reels />]}></Route>
            <Route path='/login' element={[<Login />]}></Route>
            <Route path='/post/:postid' element={[<Sidebar />,<Postbig />]}></Route>
            <Route path='/user/:userprofileid' element={[<Sidebar />,<Profile />]}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
