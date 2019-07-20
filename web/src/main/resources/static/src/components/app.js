import React, {Component} from 'react';
import UpperNav from "./uppernav";
import HomePage from "./home_page";
import DoctorList from "./doctor_list";
import {Route, Switch} from 'react-router-dom';
import AppointmentDetails from "./appointment_details";
import RequireAuth from './auth/require_auth';
import Signin from "./auth/signin";
import Signout from "./auth/signout";
import Signup from "./auth/signup";

export default class App extends Component {
    render() {
        return (
            <div>
                <UpperNav/>
                <Switch>
                    <Route path="/practices" component={DoctorList}/>
                    <Route path="/appointment_details/:consultantId/:appointmentDate/:appointmentStartTime/:appointmentEndTime" component={RequireAuth(AppointmentDetails)}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signout" component={Signout}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path='/' component={HomePage}/>
                </Switch>

            </div>
        );
    }
}