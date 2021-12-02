import React,{useState,useEffect,useRef} from 'react'
import useGlobalContext from './context'

export default function Submenu() {
    const{isSubmenuOpen,location,page:{page,links}} = useGlobalContext()
    const submenu = useRef(null)
    const [column,setColumn] = useState('col-2')

    useEffect(()=>{
        setColumn('col-2')
       const sub = submenu.current
       const {center,bottom} = location
       sub.style.left = `${center}px`
       sub.style.top = `${bottom}px`
       if(links.length===3){setColumn('col-3')}
       if(links.length > 3){setColumn('col-4')}
       
    },[location,links.length])
   
    return (
        <aside className={`${isSubmenuOpen? 'submenu show': 'submenu'}`} ref={submenu}>
            <h4>{page}</h4>
             
            <div className={`${column} submenu-center`} >
               {links.map((link,index)=>{
                   const {label,icon,url} = link
                //    const length = links.length
                   
                   
                   return <a key={index} href={url}  >
                       {icon}
                        {label}
                   </a>
               })}
            </div>
        </aside>
    )
}
