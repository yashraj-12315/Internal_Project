
import React from 'react';
import NavbarStyles from './NavbarStyles';

const Navbar = () => {
  return (
    <div style={NavbarStyles.navbar}>
      <button style={NavbarStyles.navButton}>Logout</button>
      <button style={NavbarStyles.navButton}>Account</button>
      <button style={NavbarStyles.navButton}>Settings</button>
    </div>
  );
};

export default Navbar;
