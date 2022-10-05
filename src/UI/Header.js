import React from 'react';

import './Header.css';

const Header = (props) => {
  return (
    <div className="headBox animate">
      <img className="headImg" src={props.headLink} alt="Head"/>
    </div>
  );
};

export default Header;