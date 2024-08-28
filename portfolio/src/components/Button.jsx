import React from 'react'
import "../styles/Button.css";

function Button({text}) {
  return (
    <>
    <button className='glow-button'>{text}</button>
    </>
  )
}

export default Button;