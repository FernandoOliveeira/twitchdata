import React from 'react'

const navbar = (props) => {
  return (
  <nav>
    <div className="nav-wrapper valign-wrapper">
      <img src={props.imgSrc} className="brand-logo right nav-img circle" alt={'asd'}/>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="home">Home</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default navbar