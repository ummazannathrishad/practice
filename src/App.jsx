import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

 import Blogs from './components/Blogs';
 import Blog from './components/Blog';
 import Contract from './components/Contract';
 import Error from './components/Error';
 import Navber from './components/Navber';

import './App.css';
// import Hooks from './components/Hooks';
// import Component1 from './components/raf/component1';

function App ()  {
  return (
   <div>
      {/* <Hooks /> */}
      {/* <Component1 /> */}
     <BrowserRouter>
     {/* <nav>
        <ul>
          <a href="home">Home</a> <br />
          <a href="blogs">Blogs</a> <br />
          <a href="contract">contract</a> <br />
        </ul>

     </nav> */}
     <Navber />

            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/contract" element={<Contract/>} />
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/blogs/:title" element={<Blog/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
     </BrowserRouter>
      </div>
  );
}

export default App;

