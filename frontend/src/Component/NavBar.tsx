import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <header className='navbar'>
            <div className='navbar_title'>MyFace
            </div>
            <div className='navbar_item'>
                <Link to="/posts">Posts</Link>
            </div>
            <div className='navbar_item'>
                <Link to="/users">Users</Link>
            </div>
            <div className='navbar_item'>
                <Link to="/users/create">New User</Link>
            </div>
            <div className='navbar_item'>
                <Link to="/posts/create">New Post</Link>
            </div>
        </header>
    );
}
export default navbar;