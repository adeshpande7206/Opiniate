import React, { Component, lazy, Suspense } from 'react';
import './app.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar/navbar'

const Home = lazy(() => import('./Home/home'))
const Dashboard = lazy(() => import('./Dashboard/dashboard'))
const CreatePoll = lazy(() => import('./CreatePoll/createPoll'))


export default class App extends Component {
  render() {
    return (
        
        <Suspense fallback={<h1>Loading</h1>}>
            <BrowserRouter>
            <Navbar/>
               {/* <div className="App"> */}
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/create-poll' component={CreatePoll} />
                  </Switch>
               {/* </div> */}
            </BrowserRouter>
        </Suspense>
    );
  }
}
