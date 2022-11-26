import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <link to="/">About</link>
        </li>
        {/* <li>
          <link to="/"></link>
        </li>
        <li>
          <link to="/"></link>
        </li> */}
      </ul>
    </nav>
    <header className="header">
    <a href="#" className="logo">
        <img src="/imga/logo.png" alt="" />
      </a>
      <hr class="new1"/>
      <nav className="navbar">
      
        
        <a href="#learn" >
          Learn
        </a>
        <a href="#myLearning" >
          MyLearning
        </a>
        <button>subscribe</button>
        <button>login</button>
      </nav>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn" />
      </div>
    </header>
    </>
  )
}

export default Navbar;