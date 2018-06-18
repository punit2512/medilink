import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import MapForAddress from "./mapforaddress";
import {Link} from 'react-router-dom';

class DoctorList extends Component {

    constructor(props) {
        super(props);
        this.renderAvailableTime = this.renderAvailableTime.bind(this);
    }

    getLatLong(zip) {
        var lat = '';
        var lng = '';
        var address = zip;

    }

    getFormattedDate(date) {

        console.log('printing formatted date for date:', date);
        console.log('day=', date.getDay());
        console.log('month=', date.getMonth());
        var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        var day = week[date.getDay()];
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        return day + ', ' + mm + '/' + dd;
    }


    renderAvailableTime(date, availableTime,consultantId) {
        console.log('button for avialabletime:', availableTime, ' and cid:', consultantId);
        const dateHyphenated = date.replace(/\//g, "-");
        return (

            <Link className="btn btn-primary" to={`/appointment_details/${consultantId}/${dateHyphenated}/${availableTime}`}>
                {availableTime}
            </Link>
        );
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    getDate(date) {
        var parts =date.split('/');
        return new Date(parts[2], parts[1], parts[0]);
    }

    renderAvailableTimes(consultantId, date, availableTimeslots) {
        console.log('date:', date, 'available timeslots:', availableTimeslots);
        const availableTimeslotStartTimes = Object.keys(availableTimeslots);
        console.log('consultant consultantId:', consultantId);
        console.log('avialableTimeslotStartTimes', availableTimeslotStartTimes);
        var d = this.getDate(date);
        console.log('passing date:', d);
        var renderAvailableTime = this.renderAvailableTime;
        return (
            <div key={date}>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <span className="input-group-button">
                        {this.getFormattedDate(d)}
                        {availableTimeslotStartTimes.map(
                            function(availableTime) {
                                return renderAvailableTime(date, availableTime, consultantId);
                            })}
                </span>
                </form>
            </div>
        );
    }

    renderAppointmentDate(id, appointment) {
        console.log('appointment is:', appointment);
        console.log('consultantid is:', id);
        var keys = Object.keys(appointment);
        console.log('keys:', keys);
        var appointmentRendered = (
            keys.map((key) => {
                    return this.renderAvailableTimes(id, key, appointment[key]);
                }
            )
        )
        console.log('appointmentRendered=', appointmentRendered);
        return (
            <div>
                {appointmentRendered}
            </div>
        );
    }

    renderAppointments(id, appointments) {
        console.log('appointments:', appointments);
        // First group the appointments by date
        var appointmentMap = appointments.reduce(
            (accumulator, target) => ({...accumulator, [target.appointmentDate]: target.availableTimes}),
            {});

        console.log('appointment map:', appointmentMap);

        return (
            <td>
                <div>
                    {this.renderAppointmentDate(id, appointmentMap)}
                </div>
            </td>
        );
    }

    renderConsultant(consultant) {
        var addressDefined = (consultant.practices.length > 0);
        if (addressDefined) {
            var address = consultant.practices[0].primaryAddress;
            var fullAddress = address.addressLine1 + " " + address.addressLine2 + " " + address.city + " " + address.zip;
            console.log('address is:', address);
        }
        return (
            <tr key={consultant.consultantName}>
                <td><img src="img/12243zoom.jpg" className="img-thumbnail" alt="Cinque Terre"/></td>
                <td><p>{consultant.consultantName}</p>
                    <p>{fullAddress} {addressDefined && <a href="#">Directions</a>}</p>

                    <span
                        className="fa fa-star checked"></span> <span
                        className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span> <span
                        className="fa fa-star"></span> <span
                        className="fa fa-star"></span>
                </td>
                <td><MapForAddress address={fullAddress} width="100px" height="100px"/></td>
                <td><p><img src="img/Email.png"/></p><p><img src="img/message.jpg"/></p></td>
                {this.renderAppointments(consultant.consultantId,consultant.availableSlots)}
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
