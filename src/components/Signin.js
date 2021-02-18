import React, { useEffect, useState,useContext } from 'react';
import AuthContext from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom';
import authService from '../services/AuthService'


export default function Signin (props){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [passwordVisible,setPasswordVisible] = useState(false)

    const authContext = useContext(AuthContext)
    const history = useHistory()


    //Empeche d'afficher la page de login quand on est déja connecté
    useEffect(()=>{
        if(authContext.userInfos){
            history.push('/')
        }
        document.addEventListener('keypress',checkEnterPress)
        return function cleanup() {
            document.removeEventListener('keypress',checkEnterPress)
          };

    },[])

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
      };

    //appuyer sur entrée pour se connecter
    const checkEnterPress = (e) => {
        if(e.key == "Enter"){
            document.getElementById("login").click()
        }
    }

    //Se connecter
    const connexion = ()=>{
        if(isValidEmail(email)){
            authContext.signUser(email,password).then((json) => {
                console.log("SIGNIN",json)
                if(json){
                   history.push("/articles")
                }else{
                    setError("Utilisateur introuvable")
                }
            })
          }else{
            setError("L'adresse email n'est pas au bon format")
          }
    }


    return(
        <>
            <div className="h-full mt-24 lg:mt-32 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="my-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input autoComplete="off" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"/>
                        </div>
                        <div className="-mt-px">
                            <div>
                                <div class="relative ">
                                <input autoComplete="off" onChange={(e)=>setPassword(e.target.value)} aria-label="Password" name="password" type={passwordVisible ? "text" : "password"} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"/>
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center ">
                                        <span onClick={()=>setPasswordVisible(!passwordVisible)} class="cursor-pointer text-gray-500 sm:text-sm sm:leading-5" id="price-currency">
                                            <svg class="  h-5 w-5 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {error && 
                        <div className="rounded-md bg-red-200 p-4 mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm leading-5 font-medium text-red-800">
                                        {error}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center text-sm leading-5">
                            <div onClick={()=>props.history.push('/register')} className="cursor-pointer font-medium text-red-700 hover:text-red-600 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Pas encore inscrit ?
                            </div>
                        </div>
                    </div>

                    

                    <div className="mt-6">
                        <button id="login" onClick={()=>connexion()}  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-red-600 focus:outline-none focus:border-red-800 focus:shadow-outline-red active:bg-red-800 transition duration-150 ease-in-out">
                        Se connecter
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}