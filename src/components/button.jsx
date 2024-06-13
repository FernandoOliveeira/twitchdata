import React from 'react'

const Button = (props) => {
  return (
    <div className="btn-div">
        <a className="btn-large btn-twitch" href={props.btnHref}>{props.btnText}</a>
    </div>
  )
}

export default Button