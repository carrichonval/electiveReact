import React,{useEffect,useState} from 'react'
import authService from '../services/AuthService'


export default function Signup (props) {

  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [error,setError] = useState('')
  const [success,setSuccess] = useState(false)

  //Empeche d'afficher la page de login quand on est déja connecté
  useEffect(()=>{

  },[])

  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  };



  //Connexion
  const enregistrement = (props) => {
      if(isValidEmail(email)){
        authService.register(email,password).then((json) => {
            if(json){
                props.history.push('/login')
            }else{
                setError("Erreur lors de la connexion")
            }
        })
      }else{
        setError("L'adresse email n'est pas correct")
      }

  }


    return(
        <>  
{success ?
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>


    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-200">
          <svg class="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
            Compte créé avec succès !
          </h3>
          <div class="mt-2">
           
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <span class="flex w-full rounded-md shadow-sm">
          <button onClick={()=>{props.history.push('/login')}} type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-primary text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-trf-700 focus:shadow-outline-res transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Aller au menu de connexion
          </button>
        </span>
      </div>
    </div>
  </div>
</div> : null }
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Enregistre toi
                    </h2>
            
                </div>



  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
    <div className="bg-gray-100 py-2 px-4 sm:rounded-lg sm:px-10">
      <div>


        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
            Email address
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input autoComplete="off" onChange={(e)=>setEmail(e.target.value)} id="email" type="email" className={(isValidEmail(email) ? " border-gray-300  " : " border-red-500 ")+" outline-none appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"}/>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input autoComplete="off" onChange={(e)=>setPassword(e.target.value)} id="password" type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>


        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button disabled={(email == "" || password == "" ? true : false)} onClick={()=>enregistrement(props,password,email)}className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Valider mon inscription
            </button>
          </span>
        </div>
      </div>

    </div>
  </div>
</div>

        </>
    )
}