import React from 'react';

import logo from '../../img/logo.svg';
import userIcon from '../../img/userIcon.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <section>
        <img src={logo} alt="companyLogo" />
      </section>
      <section className="links-box">
        <Link to={'/'}>Home</Link>
        <Link to={'/devices'}>Devices</Link>
      </section>
      <section className="user-icon">
        <img src={userIcon} alt="userIcon" />
      </section>
    </header>
  );
};

export default Header;
