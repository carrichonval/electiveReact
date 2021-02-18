import React, {useState,useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'
import { withRouter,Link } from "react-router-dom";

export default withRouter((props)=>{

    const authContext = useContext(AuthContext)
    const history = useHistory()
    console.log(authContext.userInfos)
    if(!authContext.userInfos){
      return null
    }

    const [isOpenMobile,setIsOpenMobile] = useState(false)

    if(isOpenMobile){
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(0, y);};
    }else{
        window.onscroll=function(){};
    }
    
    //Header qui s'affiche seulement quand on est connecté    
        return (
            <>
            <nav id="navbar" className="bg-white border-b border-gray-200 z-50 mb-4 sticky top-0 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="h-12 w-12 lg:hidden block">
                                    
                                </div>
                                <div className="h-12 w-12 lg:block hidden">
                                   
                                </div>
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                                <Link  to="/articles" className={(props.location.pathname === "/articles" ? "border-primary " : "border-transparent ") + "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 focus:outline-none hover:border-red-400 transition duration-150 ease-in-out"}>
                                    Articles
                                </Link>
                                <Link  to="/settings" className={(props.location.pathname === "/settings" ? "border-primary " : "border-transparent ") +"ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-red-400 transition duration-150 ease-in-out"}>
                                    Settings
                                </Link>
                                <Link  to="/admin/settings" className={(props.location.pathname === "/admin/settings" ? "border-primary " : "border-transparent ") +"ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-red-400 transition duration-150 ease-in-out"}>
                                    Admin settings
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            
                                <Link  to="/settings" className="mx-2">
                                    <svg className={(props.location.pathname === "/parametres" ? "text-primary " : "text-gray-500 ")+"h-5 w-5 "}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"> 
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                    </svg>
                                </Link>

                        </div>

                    </div>
                </div>
            </nav>


            </>
        )
})
