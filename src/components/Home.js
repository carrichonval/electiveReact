import React, {useState,useEffect} from 'react';


export default function Home (){


    const [sports,setSports] = useState([])
    const [sportName,setSportName] = useState('')


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

    function deleteSport(id){
        fetch("https://api.valentincarrichon.fr/sports/"+id,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
           fetchAPI()
        }).catch((error)=>{
            console.log(error)
        })
    }

    function addSport(){
        fetch("https://api.valentincarrichon.fr/sports/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:sportName
            })

        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
           fetchAPI()
           setSportName('')
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
        
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">

                <div className="flex flex-row">
                
                    <div className="flex flex-row items-center justify-center mb-3 w-full lg:w-2/3">
                        <input onChange={(e)=>setSportName(e.target.value)} className=" w-full  bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="Sport .."/>
                    </div>
                    <div className="flex flex-row items-center justify-center mb-3 w-full lg:w-1/3">

                        <button onClick={()=>addSport()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Ajouter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {sports.map((sport)=>{
                        return(
                            <div onClick={()=>deleteSport(sport.id)} key={sport.id} className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:bg-gray-200">
                                <div className="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt className="text-sm text-center leading-5 font-medium text-gray-500 truncate">
                                            {sport.name}
                                        </dt>
                                    </dl>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}