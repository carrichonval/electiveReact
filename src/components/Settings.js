import React, {useState,useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'



export default function Settings (){

    const authContext = useContext(AuthContext)
    const history = useHistory()
    const [success,setSuccess] = useState(false)

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    useEffect(() => {
        setUser(authContext.userInfos)
    }, []);

    if(!authContext.userInfos){
        history.push('/login')
      return null
    }


    const updateUser = () => {
        authContext.updateUser(user).then((json) => {
            console.log("update",json)
            if(json){
                setSuccess(true)
            }
        })
    }


    return (
        <>
          {success && 
                        <div className="rounded-md bg-green-200 p-4 mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm leading-5 font-medium text-green-800">
                                        Modification réussi
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                Settings
            </div>

            <div className="h-full flex flex-rows items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                <div className="flex flex-col w-full">
                <input onChange={(e)=>setUser({...user,email:e.target.value})} value={user.email} aria-label="email" name="email"className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"/>

                </div>
                <div className="flex flex-col w-full">
                <input onChange={(e)=>setUser({...user,password:e.target.value})} value={user.password} aria-label="password" name="password"className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"/>

                </div>
            </div>
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 pt-4 px-4 lg:px-4 ">
                <button onClick={()=>updateUser()} className="bg-blue-500 rounded-md p-2">Valider la modification</button>
            </div>
        </>
    )
}