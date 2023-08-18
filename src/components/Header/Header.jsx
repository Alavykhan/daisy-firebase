import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div>
         <nav className="navbar bg-neutral text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl">daisy Firebase</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        </nav>
       </div>
    );
};

export default Header;