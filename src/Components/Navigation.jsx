import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <header className="bg-light sticky-top">
        <div className="raw">
        <div className="cal d-flex">
          <nav className="navbar m-2">
            <ul className="list-inline d-flex">
              <li className="list-inline-item"><Link className="link text-secondary text-decoration-none m-2 m-lg-5" to="/"><b className='navt'>ALL</b></Link></li>
              <li className="list-inline-item"><Link className="link text-secondary text-decoration-none m-2 m-lg-5" to="/fsd"><b className='navt'>FULL STACK DEVELOPMENT</b></Link></li>
              <li className="list-inline-item"><Link className="link text-secondary text-decoration-none m-2 m-lg-5" to="/ds"><b className='navt'>DATA SCIENCE</b></Link></li>
              <li className="list-inline-item"><Link className="link text-secondary text-decoration-none m-2 m-lg-5" to="/cs"><b className='navt'>CYBER SECURITY</b></Link></li> 
              <li className="list-inline-item"><Link className="link text-secondary text-decoration-none m-2 m-lg-5" to="/c"><b className='navt'>CAREER</b></Link></li>           
            </ul>
          </nav>
        </div>
        </div>
      </header>
  )
}

export default Navigation