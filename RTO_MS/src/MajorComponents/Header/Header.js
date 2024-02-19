import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://i.pinimg.com/originals/92/14/eb/9214eb8c928dc609928d9a4a79d38aa4.png" alt="RTO Management System Logo" />
        </div>
        <div className="title" style={{ display: 'flex', justifyContent: 'center' }}>
  <h1>RTO Management System</h1>
</div>


    </header>
  );
};

export default Header;
