import React from "react";

function Menu() {
  return (

    <div className='container'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title ">The lost city of Eldara</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Welcome!</h6>
          <p className="card-text">This website is to show off my skills as a front-end developer. </p>
          <a href="/story" className="card-link">Story</a>
          <a href="/info" className="card-link">Info</a>
          <a href="/about" className="card-link">About</a>
        </div>
      </div>
    </div>

  )
}

export default Menu;