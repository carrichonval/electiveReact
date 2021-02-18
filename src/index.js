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

import Home from './components/Home'
import ListArticles from './components/ListArticles'
import Article from './components/Article'
import Settings from './components/Settings'
import AdminSettings from './components/AdminSettings'
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Signup from './components/Signup'


const customHistory = createBrowserHistory()

function App() {
    const [userInfos, setUserInfos] = useState(null)
    const refreshUserInfos = useCallback(() => {
      return authService.signin().then((user) => {
        setUserInfos(user)
      })
    },[])
    
    useEffect(() => {
      refreshUserInfos()
    },[refreshUserInfos])
    return (
        <AuthContext.Provider value={
            userInfos,
            refreshUserInfos
        }
        >
            <Router history={customHistory}>
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

