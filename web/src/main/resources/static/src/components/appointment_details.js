import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createAppointment} from "../actions";
import {getFormattedDate} from "../utils";

class AppointmentDetails extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(values) {
        this.props.createAppointment(values, () => {
            console.log('post submission - values=', values, ' - pushing to home');
            this.props.history.push('/');
        });
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched  && error? 'has-danger':''}`;
        return (
            <div className="form-group" className={className}>
                <label>{field.label}</label>
                <input className="form-control" {...field.input} type={field.type} placeholder={field.placeholder}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    render() {
        const {handleSubmit} = this.props;
        console.log('Within appointment render: consultant = ', this.props.consultant);
        const {consultant, appointmentDate, appointmentStartTime, appointmentEndTime, patientId} = this.props;
        var parts = appointmentDate.split('-');
        const formattedAppointmentDate = getFormattedDate(new Date(parts[2], parts[1], parts[0]));
        const appointmentStartDate = parts[2] + '-' + parts[1] + '-' + parts[0] + ' ' + appointmentStartTime;
        const appointmentEndDate = parts[2] + '-' + parts[1] + '-' + parts[0] + ' ' + appointmentEndTime;
        console.log('appointment start date:' + appointmentStartDate, ', appointment end date:', appointmentEndDate);
        const primaryAddress = consultant.practices[0].primaryAddress;
        const consultantId = this.props.consultantId;
        console.log('primary address:', primaryAddress);
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container bg-light">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>Review &amp; Book</h1>
                                        <form onSubmit={handleSubmit(data => this.onSubmit({...data, consultantId: consultantId, appointmentStartDate: appointmentStartDate, appointmentEndDate: appointmentEndDate, patientId: patientId}))}>
                                            <div className="bg-white">
                                                <p>Who will be seeing the doctor?</p>
                                                {/*<div className="container">
                                                    <Field name="firstName" component={this.renderField} type="text" label="First name">Enter your first name</Field>
                                                    <Field name="middleName" component={this.renderField} type="text" label="Middle name">Enter your middle name</Field>
                                                    <Field name="lastName" component={this.renderField} type="text" label="Last name">Enter your last name</Field>
                                                    <Field name="email" component={this.renderField} type="text" label="Email">Enter your email address</Field>
                                                    <Field name="phone" component={this.renderField} type="text" label="Phone number">Enter your phone number</Field>
                                                </div>*/}
                                            </div>
                                            <div className="form-group">
                                                <div className="bg-white">
                                                    <label>Appointment</label>
                                                </div>
                                                <div className="bg-white">
                                                    <label className="bg-white">Psychiatry Consultation
                                                        <br/> <div>{formattedAppointmentDate} {appointmentStartTime}</div>
                                                                <br/>
                                                                    <a>Edit</a>
                                                    </label>
                                                </div>
                                                <br/>
                                                    <div className="bg-white">
                                                        <label>Phone number where the doctor can contact you</label>
                                                    </div>
                                                    <label>
                                                        <a href="#">Add Phone number</a>
                                                    </label>
                                                    <Field name="insuranceProviderId" component={this.renderField} label="Insurance Provider ID (optional)"/>
                                                    <Field name="insurancePlanId" component={this.renderField} label="Insurance Plan ID (optional)"/>
                                                    <Field name="notes" component={this.renderField} label="Notes for doctors office (optional)"/>
                                            </div>
                                            <button type="submit" className="btn btn-secondary">Book Appointment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <img className="img-fluid img-thumbnail" src="/img/profile.jpg"/></div>
                                        <h6 className="product-title">DR. {consultant.consultantName}</h6>
                                        <h6 className="product-title">{consultant.specialities[0]}</h6>
                                        <div>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <hr/>
                                            <h6 className="product-title">Location</h6>
                                            <div>
                                                <label>{primaryAddress.addressLine1}, {primaryAddress.addressLine2}
                                                , {primaryAddress.city}, {primaryAddress.state}, {primaryAddress.zip}</label>
                                            </div>
                                            <hr/>
                                                <h6 className="product-title">Appointment</h6>
                                                <label>{formattedAppointmentDate}, {appointmentStartTime}</label>
                                                <hr/>
                                                    <h6 className="product-title">Patient</h6>
                                                    <label>Nitin Arora</label>
                                                    <hr/>
                                                        <h6 className="product-title">Visit Reason</h6>
                                                        <label>{consultant.specialities[0]} Consultation</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                );
                }
}

function validate(values) {
    const errors = {};
    // if error is empty, then redux assumes the form is valid, else it assumes form is invalid
    return errors;
}

function mapStateToProps({consultants}, ownProps) {
    console.log('consultants in appointment details:', consultants);
    console.log('ownProps in appointment details:', ownProps);
    return { consultant: consultants[ownProps.match.params.consultantId],
        consultantId: ownProps.match.params.consultantId,
        appointmentDate: ownProps.match.params.appointmentDate,
        appointmentStartTime: ownProps.match.params.appointmentStartTime,
        appointmentEndTime: ownProps.match.params.appointmentEndTime,
        patientId: ownProps.match.params.patientId};
    return consultants;
}

export default reduxForm({
    validate,
    form: 'AppointmentBookForm'
})(
    connect(mapStateToProps,{createAppointment})(AppointmentDetails));