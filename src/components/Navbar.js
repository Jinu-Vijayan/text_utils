import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
            {/* <p><NavLink to='/'>TextUtils</NavLink></p> */}
        </div>
        <div>
            <ul>
                {/* <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to='/about' >About Us</NavLink></li>
                <li><NavLink to="/contact" >Contacts</NavLink></li> */}
            </ul>
        </div>
        <div>
          <div>
              <div></div>
          </div>
          {/* <p>Enable {state.dark_mode ? "dark" : "light"} mode</p> */}
        </div>
    </div>
  )
}

export default Navbar