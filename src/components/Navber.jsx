import React from 'react';
import { Link,NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <nav>
        <NavLink  to="/home" className="nav-link">Home</NavLink>
        <NavLink  to="/blogs" className="nav-link">Blogs</NavLink>
        <NavLink to="/contract" className="nav-link">Contract</NavLink>

    </nav>
  );
};

export default Navber;