import React, {useState,useEffect} from 'react';


export default function Home (){


    const [sports,setSports] = useState([])


    function fetchAPI(){
        fetch("https://api.valentincarrichon.fr/sports/",{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
           console.log(json)
           setSports(json.sports)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchAPI()
    },[])

    console.log("SPORTS",sports)

    return (
        <>
            <div>Home</div>
            <ul>
                {sports.map((sport)=>{
                    return(
                        <li key={sport.id}>{sport.name}</li>
                    )
                })}
            </ul>
        </>
    )
}