import React from 'react'
import {NavLink} from 'react-router-dom'
import MAN from '../gallery/man.jpg'
function Navbar() {
  return (
    <div className='navbar'>
    <div style={{"marginTop":" -0.5rem"}}>
    <img src={MAN} alt='img' style={{width:"5rem",height:"5rem",borderRadius:"50%"}} />
    </div>
    <div>

        <NavLink className='navlink' to='/'>Home</NavLink>
        <NavLink  className='navlink'  onClick={()=>alert('Thanks for visitng!!')}>Message</NavLink>
    </div>
    </div>
  )
}

export default Navbar