import React, {useState,useEffect,useContext} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'
import articleService from '../services/ArticlesService'



export default function Article (){

    const authContext = useContext(AuthContext)
    const history = useHistory()
    const params = useParams()
    const location = useLocation()
    console.log(location)

    const [article,setArticle] = useState(null)

    useEffect(() => {
        if(location && location.state && location.state.article){
            setArticle(location.state.article)
        }else{
            articleService.getArticlesById(params.id).then((json)=>{
                setArticle(json)
            })
        }
    }, []);


    if(!authContext.userInfos){
        history.push('/login')
      return null
    }
    console.log(article)

    if(!article){
        return null
    }

    return (
        <>
        
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                Article {params.id}
            </div>
            <div className="mx-4">
                <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


                            <li class="col-span-1 bg-white rounded-lg shadow cursor-pointer">
                            <div class="w-full flex items-center justify-between p-6 space-x-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                <h3 class="text-gray-900 text-sm leading-5 font-medium truncate">{article.titre}</h3>
                                </div>
                                <p class="mt-1 text-gray-500 text-sm leading-5 truncate">{article.description}</p>
                            </div>
                            </div>
                        
                        </li>
                </ul>
                </div>
        </>
    )
}