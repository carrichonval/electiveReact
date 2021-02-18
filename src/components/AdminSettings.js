import React, {useState,useEffect,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'
import authService from '../services/AuthService';



export default function AdminSettings (){

    const authContext = useContext(AuthContext)
    const history = useHistory()
    const [addSuccess,setAddSuccess] = useState(false)
    const [users,setUsers] = useState([])
    const [successDelete,setSuccessDelete] = useState(false)


    useEffect(() => {
        authService.getUsers().then((json)=>{
            setUsers(json)
        })
    }, []);


    const [newUser,setNewUser] = useState({
        id:Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        email:"",
        password:""
    })

    if(!authContext.userInfos){
        history.push('/login')
      return null
    }


    const addUser = ()=>{
        authService.addUser(newUser).then((json) => {
            if(json){
                setAddSuccess(true)
                setTimeout(() => {
                    setAddSuccess(false)
                  },2000)
                setNewUser({
                    id:Math.floor(Math.random() * (100 - 10 + 1)) + 10,
                    email:"",
                    password:""
                })
                authService.getUsers().then((json)=>{
                    setUsers(json)
                })
            }
        })
    }
    const deleteUser = (id)=>{
        authService.deleteUser(id).then((json) => {
            if(json){
                authService.getUsers().then((json)=>{
                    setUsers(json)
                })
                setSuccessDelete(true)
                setTimeout(() => {
                    setSuccessDelete(false)
                  },2000)
            }
        })
    }

    return (
        <>

        
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                Admin settings
            </div>
            {addSuccess && 
                        <div className="rounded-md bg-green-200 p-4 mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm leading-5 font-medium text-green-800">
                                        L'utilisateur a bien été ajouté
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
                                {successDelete && 
                        <div className="rounded-md bg-green-200 p-4 mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm leading-5 font-medium text-green-800">
                                        L'utilisateur a bien été supprimé
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                <div className="flex flex-row w-full bg-white rounded-md px-2">
                    <div className="flex flex-col w-full">Ajouter un user</div>
                    <div className="flex flex-col w-full">
                <input onChange={(e)=>setNewUser({...newUser,email:e.target.value})} value={newUser.email} aria-label="email" name="email"className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email"/>

                </div>
                <div className="flex flex-col w-full">
                <input onChange={(e)=>setNewUser({...newUser,password:e.target.value})} value={newUser.password} aria-label="password" name="password"className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"/>

                </div>
                </div>
                <div className="h-full flex flex-col items-center justify-center bg-gray-50 pt-4 px-4 lg:px-4 ">
                    <button onClick={()=>addUser()} className="bg-blue-500 rounded-md p-2">Ajouter l'utilisateur</button>
                </div>
                <div className="flex flex-row w-full bg-white rounded-md px-2">

<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Password
              </th>
              <th class="px-6 py-3 bg-gray-50">Action</th>
            </tr>
          </thead>
          <tbody>

           {users.map((user)=>{
               return(
                <tr class="bg-white">
                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  {user.id}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  {user.email}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  {user.password}
                </td>

                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a onClick={()=>deleteUser(user.id)} class="cursor-pointer text-red-600">Delete</a>
                </td>
              </tr>
               )
           })}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </>
    )
}