import React from 'react'
import {FaTimes} from 'react-icons/fa'
import sublinks from './data'
import useGlobalContext from './context'
export default function Sidebar() {
    const{isSidebarOpen,closeSidebar} = useGlobalContext()
    return (
        <aside className={isSidebarOpen?'sidebar-wrapper show':'sidebar-wrapper'}>
            <div className='sidebar'>
            <button className='close-sidebar' onClick={closeSidebar}><FaTimes/></button>
            <div className='sidebar-links'>
                {sublinks.map((item,index)=>{
                    const {page,links} = item
                    return(
                        <article key={index}>
                            <h4>{page}</h4>
                            <div className='sidebar-sublinks'>
                                {links.map((sub,index)=>{
                                    const {label,icon,url} = sub
                                    return (
                                        <a key={index} href={url}>
                                            {icon}
                                            {label}
                                        </a>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
                </div>
            </div>
             
        </aside>
    )
}
