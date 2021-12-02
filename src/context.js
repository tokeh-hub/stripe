import React,{useState,useContext} from "react";
import sublinks from './data'
const AppContext = React.createContext();
export const AppProvider = ({children}) => {
    const[isSubmenuOpen,setIsSubmenuOpen] = useState(true)
    const[isSidebarOpen,setIsSidebarOpen] = useState(false)
    const [location,setLocation] = useState({})
    const[page,setPage] = useState({page:'',links:[]})
    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text,coordinates) =>{
       const currentPage = sublinks.find((link) => link.page === text)
       setPage(currentPage)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false)
    }
     return <AppContext.Provider value={{
         isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar,location,page
     }}>{children}</AppContext.Provider>

}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export default useGlobalContext