import React, {useState,useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'
import { withRouter,Link } from "react-router-dom";
import authService from '../services/AuthService'

export default withRouter((props)=>{

    const authContext = useContext(AuthContext)
    const history = useHistory()
    console.log(authContext.userInfos)
    if(!authContext.userInfos){
      return null
    }

    console.log("header",authContext.userInfos)

    const [isOpenMobile,setIsOpenMobile] = useState(false)

    if(isOpenMobile){
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(0, y);};
    }else{
        window.onscroll=function(){};
    }


    const deconnexion = ()=>{
            authContext.logout().then(() => {
                   history.push("/login")
            })
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
                                {authContext.userInfos.role == "super_admin" ?
                                    <Link  to="/admin/settings" className={(props.location.pathname === "/admin/settings" ? "border-primary " : "border-transparent ") +"ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-red-400 transition duration-150 ease-in-out"}>
                                    Admin settings
                                </Link>
                                :null}
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            Email :{authContext.userInfos.email} Password : {authContext.userInfos.password}
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                           <button onClick={()=>deconnexion()}>Déconnexion</button>
                        </div>

                    </div>
                </div>
            </nav>


            </>
        )
})
