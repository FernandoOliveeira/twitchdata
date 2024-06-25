import React from 'react'

const navbar = (props) => {
  return (
  <nav>
    <div className="nav-wrapper valign-wrapper">
      <img src={props.imgSrc} className={`brand-logo right nav-img circle ${props.hide}`} alt={props.imgAlt}/>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        {
          props.navLinks.map((link) => (
            <li><a href={link.href} key={link.key}>{link.label}</a></li>
          ))
        }
      </ul>
    </div>
  </nav>
  )
}

export default navbar