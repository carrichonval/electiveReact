import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.generated.css';

import {createBrowserHistory} from 'history'

import {
  Router,
  Route,
  Switch
} from 'react-router-dom'


import Home from './components/Home'
import ListArticles from './components/ListArticles'
import Article from './components/Articles'
import Settings from './components/Settings'
import AdminSettings from './components/AdminSettings'
import NotFound from './components/NotFound'


const customHistory = createBrowserHistory()

const routing = ( 
  <Router history={customHistory}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={ListArticles} />
            <Route exact path="/articles/:id" component={Article} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/admin/settings" component={AdminSettings} />
            <Route exact path="*" component={NotFound} />
        </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

