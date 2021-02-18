import React,{useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.generated.css';

import {createBrowserHistory} from 'history'

import {
  Router,
  Route,
  Switch
} from 'react-router-dom'

import AuthContext from './contexts/AuthContext'
import authService from "./services/AuthService"
import articleService from './services/ArticlesService'

import Home from './components/Home'
import ListArticles from './components/ListArticles'
import Article from './components/Article'
import Settings from './components/Settings'
import AdminSettings from './components/AdminSettings'
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Header from './components/Header'


const customHistory = createBrowserHistory()

function App() {

    useEffect(()=>{
        console.log("INITIALISATION")
        authService.init()
        articleService.init()
    },[])

    const [userInfos, setUserInfos] = useState(null)
    const signUser = useCallback((email,password) => {
      return authService.signin(email,password).then((user) => {
        setUserInfos(user)
        return user
        
      })
    },[])

    const checkAuth = useCallback(() => {
        return authService.checkAuth().then((user) => {
          console.log("Check auth",user)
          setUserInfos(user)
        })
      },[])

    console.log("User infos",userInfos)
    
    
    useEffect(() => {
      checkAuth()
    },[checkAuth])

    return (
        <AuthContext.Provider value = {{userInfos, signUser,checkAuth}}
        >
            <Router history={customHistory}>
                <Header/>
                <Switch>
                    <Route exact path="/login" component={Signin} />
                    <Route exact path="/register" component={Signup} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/articles" component={ListArticles} />
                    <Route exact path="/articles/:id" component={Article} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/admin/settings" component={AdminSettings} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
  }



ReactDOM.render(<App/>, document.getElementById('root'))

