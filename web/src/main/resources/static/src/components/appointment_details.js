import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createAppointment} from "../actions";

class AppointmentDetails extends Component {

    onSubmit(values) {
        this.props.createAppointment(values, () => {
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
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container bg-light">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>Review &amp; Book</h1>
                                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                            <div className="bg-white">
                                                <p>Who will be seeing the doctor?</p>
                                                <div className="container">
                                                    <Field name="name" component={this.renderField} type="radio" label="Your name" checked="">Nitin Arora (Me)</Field>
                                                </div>
                                            </div>
                                            <a className="text-warning" href="#">Someone Else</a>
                                            {/*<div className="form-group">
                                                <div className="bg-white">


                                                    <label htmlFor="InputEmail1">Insurance</label>
                                                    <div>
                                                        <select>
                                                            <option value="volvo">I'm paying for myself</option>
                                                            <option value="saab">Insurance agency 1</option>
                                                            <option value="mercedes">Insurance agency 2</option>
                                                            <option value="audi">Insurance agency 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>*/}
                                            <div className="form-group">
                                                <div className="bg-white">
                                                    <label>Appointment</label>
                                                </div>
                                                <div className="bg-white">
                                                    <label className="bg-white">Psychiatry Consultation
                                                        <br/> I 'm a new Patient
                                                            <br/> Fri, May 25 -1:00 pm EDT
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
                                                    <Field name="insuranceMemberId" component={this.renderField} label="Insurance Member ID (optional)"/>
                                                    <Field name="notes" component={this.renderField} label="Notes for doctors office (optional)"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-secondary">Book Appointment</button>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <img className="img-fluid img-thumbnail" src="img/profile.jpg"/></div>
                                        <h6 className="product-title">DR. XYZ , M.D.</h6>
                                        <h6 className="product-title">Child Pychiarist</h6>
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
                                                <label>26, Court St # 816, brroklyn, NY, 11242</label>
                                            </div>
                                            <hr/>
                                                <h6 className="product-title">Appointment</h6>
                                                <label>Fri, May 25, 1:00 pm EDT</label>
                                                <hr/>
                                                    <h6 className="product-title">Patient</h6>
                                                    <label>Nitin Arora</label>
                                                    <hr/>
                                                        <h6 className="product-title">Visit Reason</h6>
                                                        <label>Pyschiatry Consultation</label>
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


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{createAppointment})(AppointmentDetails));