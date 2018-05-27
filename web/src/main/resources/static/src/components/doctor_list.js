import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchConsultants} from "../actions";
import GoogleMap from "./google_map";
import _ from 'lodash';
import MapForAddress from "./mapforaddress";

class DoctorList extends Component {

    getLatLong(zip) {
        var lat = '';
        var lng = '';
        var address = zip;

    }

    getFormattedDate(date)
    {
        var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        var day  = week[date.getDay()];
        var dd   = date.getDate();
        var mm   = date.getMonth()+1; //January is 0!
        if(dd<10)  { dd='0'+dd }
        if(mm<10)  { mm='0'+mm }
        return day+', '+mm+'/'+dd;
    }


    renderAvailableTime(availableTime) {
        console.log('button for avialabletime:', availableTime);
        return (
            <button key={availableTime} className="btn btn-primary disabled">{availableTime}</button>
        );
    }

    renderAvailableTimes(date, availableTimeslots) {
        console.log('date:', date, 'available timeslots:', availableTimeslots);
        const availableTimeslotStartTimes = Object.keys(availableTimeslots);
        console.log('avialableTimeslotStartTimes', availableTimeslotStartTimes);
        var d = new Date(date);
        return (
            <div key={date}>
                {this.getFormattedDate(d)}
                {availableTimeslotStartTimes.map(this.renderAvailableTime)}
            </div>
        );
    }

    renderAppointmentDate(appointment) {
        console.log('appointment is:', appointment);
        var keys = Object.keys(appointment);
        console.log('keys:', keys);
        var appointmentRendered = (
            keys.map((key) => {
                return this.renderAvailableTimes(key, appointment[key]);
                }
            )
        )
        console.log('appointmentRendered=',appointmentRendered);
        return (
            <div>
                {appointmentRendered}
            </div>
        );
    }

    renderAppointments(appointments) {
        console.log('appointments:', appointments);
        // First group the appointments by date
        var appointmentMap = appointments.reduce(
            (accumulator, target) => ({ ...accumulator, [target.appointmentDate]: target.availableTimes }),
            {});

        console.log('appointment map:', appointmentMap);

        return (
            <td>
                <div>
                    {this.renderAppointmentDate(appointmentMap)}
                </div>
            </td>
        );
    }

    renderConsultant(consultant) {
        var lon = 12.35;
        var lat = 78.25;
        var addressDefined = (consultant.practices.length>0);
        if (addressDefined) {
            var address = consultant.practices[0].primaryAddress;
            var fullAddress = address.addressLine1 + " " + address.addressLine2 + " " + address.city + " " + address.zip;
            console.log('address is:', address);
        }
        return (
            <tr key={consultant.consultantName}>
                <td><img src="img/12243zoom.jpg" className="img-thumbnail" alt="Cinque Terre"/></td>
                <td><p>{consultant.consultantName}</p>
                    <p>{fullAddress} {addressDefined &&  <a href="#">Directions</a>}</p>

                         <span
                            className="fa fa-star checked"></span> <span
                            className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span> <span
                            className="fa fa-star"></span> <span
                            className="fa fa-star"></span>
                </td>
                <td><MapForAddress address={fullAddress} width="100px" height="100px"/></td>
                <td><p><img src="img/Email.png"/></p><p><img src="img/message.jpg"/></p></td>
                {this.renderAppointments(consultant.availableSlots)}
            </tr>
        );
    }

    renderConsultants() {
        return _.map(this.props.consultants, consultant => {
            return (
                this.renderConsultant(consultant)
            );
        });
    }

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">

                        <table className="table table-striped">
                            <tbody>
                                {this.renderConsultants()}
                            </tbody>
                            <thead>
                            <tr>
                            </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({consultants}) {
    console.log('consultants are:', consultants);
    return {consultants};
}

export default connect(mapStateToProps, null)(DoctorList);
