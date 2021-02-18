import React, {useState,useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'



export default function ListArticles (){

    const authContext = useContext(AuthContext)
    const history = useHistory()
    console.log("page articles",authContext.userInfos)
    if(!authContext.userInfos){
        history.push('/login')
    }

    return (
        <>
        
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                Liste articles
            </div>
        </>
    )
}