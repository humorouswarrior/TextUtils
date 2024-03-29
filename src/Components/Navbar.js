import React from 'react'   //using rafce / rfc from the es7 wala extension
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to ="home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to ="about">{props.aboutText}</Link>
      </li>
      
    </ul>  
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode==='dark'?"light":"dark"}`}>  
    {/* usage of ternary/ conditional operator */}
  <input className="form-check-input" type="checkbox" role="switch" onClick = {props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
  </div>
</div>
</nav>
</>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired}    //imported proptypes for this. Now prop sent for title and abouttext has to be string otherwise error

                    //isRrequired is added so that the value here cannot be null or undefined. Has to be given some value.
Navbar.defaultProps = {title: "Set title here"
                        , aboutText : "About"}   //for the case when props are not passed and default values are to be taken

export default Navbar;