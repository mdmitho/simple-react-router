import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../CustomLink/Customlink';
import './Header.css'

const Header = () => {
    return (
        <div>
              <h1>Welcome to my fancy websit With Header Routing</h1>
              <nav className='header'>
                  <Customlink to="/">Home</Customlink>
                  <Customlink to="/friends">Friends</Customlink>
                  <Customlink to="/about">About</Customlink>
                  <Customlink to="/posts">Posts</Customlink>
              </nav>
        </div>
    );
};

export default Header;