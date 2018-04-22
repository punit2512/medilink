import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import App from "./components/app";
import DoctorList from "./components/doctor_list";
import HomePage from "./components/home_page";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={browserHistory} routes={routes}/>
//   </Provider>
//   , document.querySelector('.reactcontainer'));

/*
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={App}/>
                    <Route path="/practices" component={DoctorList}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.reactcontainer'));
*/

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.reactcontainer'));
