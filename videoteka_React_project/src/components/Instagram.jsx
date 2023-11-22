import React from 'react'

function Instagram() {
  function changeBackgroundIn(e) {
    e.target.style.background = "#f1e6c5";
    e.target.style.borderRadius = "30%";
}

function changeBackgroundOut(e) {
    e.target.style.background = " #9bc5ad";
}

  return (
    <>
        <a onMouseEnter={changeBackgroundIn} onMouseLeave={changeBackgroundOut} href="https://www.instagram.com" target="_blank">
    <img style={{height:"45px", width:"45px"}} src = "src\assets\icons8-instagram-old-80.png" />
        </a>
    </>
    
  )
}

export default Instagram;