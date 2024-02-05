import React from 'react';

import logo from  '../../img/logo.svg'
import userIcon from  '../../img/userIcon.svg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <section>
        <img src={logo} alt="companyLogo" />
      </section>
      <Link to={'/'}>
        Home
      </Link>
      <Link to={'/devices'}>
        Devices
      </Link>
      <section>
        <img src={userIcon} alt="userIcon" />
      </section>
    </header>
  );
};

export default Header;



