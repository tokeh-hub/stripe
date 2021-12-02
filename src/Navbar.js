import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from './images/logo.svg'
import useGlobalContext from './context'

export default function Navbar() {
    const{openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
    const displaySubmenu = (e) =>{
        const page = e.target.textContent
        const temp = e.target.getBoundingClientRect()
        const center = (temp.left + temp.right) / 2
        const bottom = temp.bottom-3
        console.log(temp)
        openSubmenu(page, {center,bottom})
    }
    const handleSubmenu = (e) =>{
        if(!e.target.classList.contains('link-btn')){closeSubmenu()}
    }
    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                <img src={logo} alt='stripe'></img>
                <button className='btn btn-toggle' onClick={openSidebar}><FaBars/></button>
                </div>
                <ul className='links'>
                   <li>
                       <button className='link-btn'  onMouseOver={displaySubmenu}>products</button>
                     </li>
                     <li>
                       <button className='link-btn'   onMouseOver={displaySubmenu}>developers</button>
                    </li>
                    <li>
                       <button className='link-btn'   onMouseOver={displaySubmenu}>company</button>
                   </li>
                </ul>
                <button className='btn btn-signin'>Sign In</button>
            </div>
            
        </nav>
    )
}
