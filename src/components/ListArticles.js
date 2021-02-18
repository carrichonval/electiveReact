import React, {useState,useEffect,useContext} from 'react';
import { useHistory,Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'
import articleService from '../services/ArticlesService'



export default function ListArticles (){

    const authContext = useContext(AuthContext)
    const history = useHistory()
    console.log("page articles",authContext.userInfos)
    if(!authContext.userInfos){
        history.push('/login')
    }

    const [articles,setArticles] = useState([])

    useEffect(() => {
        articleService.getArticles().then((json)=>{
            setArticles(json)
        })
    }, []);

    if(!articles){
        return(
            <>
                <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                    Liste articles
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                    Liste articles
                </div>
                <div className="mx-4">
                <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


                {articles.map((article)=>{
                    return(
                        <Link  to={{
                            pathname:"/articles/"+article.id,
                            state:{article:article}
                        }}>
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
                      </Link>
                    )
                })}
                </ul>
                </div>
                <div className="h-full flex flex-col items-center justify-center bg-gray-50 py-12 px-4 lg:px-4 ">
                <nav class="relative z-0 inline-flex shadow-sm">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">

          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          1
        </a>
        <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          2
        </a>
        <a href="#" class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          3
        </a>
        <span class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
          ...
        </span>
        <a href="#" class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          8
        </a>
        <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          9
        </a>
        <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          10
        </a>
        <a href="#" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
                </div>
            </>
        )
    }


}