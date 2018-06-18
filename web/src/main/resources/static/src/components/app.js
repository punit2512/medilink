import React, {Component} from 'react';
import UpperNav from "./uppernav";
import HomePage from "./home_page";
import DoctorList from "./doctor_list";
import {Switch, Route} from 'react-router-dom';
import AppointmentDetails from "./appointment_details";
export default class App extends Component {
    render() {
        return (
            <div>
                <UpperNav/>
                <Switch>
                    <Route path="/practices" component={DoctorList}/>
                    <Route path="/appointment_details/:consultantId/:appointmentDate/:appointmentTime" component={AppointmentDetails}/>
                    <Route path='/' component={HomePage}/>
                </Switch>

            </div>
        );
    }
}