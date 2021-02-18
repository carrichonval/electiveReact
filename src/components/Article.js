import React, {useState,useEffect,useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'



export default function Article (){

    const authContext = useContext(AuthContext)
    const history = useHistory()
    const params = useParams()
    if(!authContext.userInfos){
        history.push('/login')
      return null
    }
    console.log(params)

    return (
        <>
        
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                Article {params.id}
            </div>
        </>
    )
}