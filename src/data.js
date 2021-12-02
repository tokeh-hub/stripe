import React from 'react'
import {FaCreditCard,FaBriefcase,FaBook} from 'react-icons/fa'
const sublinks = [
    {
        page:'products',
        links:[
            {
                label:'payment',
                icon:<FaBriefcase />,
                url:'/payment'
            },
            {
                label:'terminal',
                icon:<FaBriefcase />,
                url:'/payment'
            },
            {
                label:'product',
                icon:<FaBriefcase />,
                url:'/payment'
            }
            
        ]
    },
    {
        page:'developers',
        links:[
            {
                label:'plugins',
                icon:<FaCreditCard />,
                url:'/payment'
            },
            {
                label:'libraries',
                icon:<FaCreditCard />,
                url:'/payment'
            },
            {
                label:'help',
                icon:<FaCreditCard />,
                url:'/payment'
            },
            {
                label:'billing',
                icon:<FaCreditCard />,
                url:'/payment'
            }
            
        ]
    },
    {
        page:'company',
        links:[
            {
                label:'About',
                icon:<FaBook />,
                url:'/payment'
            },
            {
                label:'customers',
                icon:<FaBook />,
                url:'/payment'
            }
            
        ]
    }
]
export default sublinks