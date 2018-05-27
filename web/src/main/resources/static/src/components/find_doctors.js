import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {fetchConsultants} from "../actions";
import {connect} from 'react-redux';

class FindDoctors extends Component {

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = "btn-group";
        var divStyle = {
            padding: "5px"
        };
        return (
            <div className="form-group" style={divStyle}>
                <input className={className} {...field.input} type="text" size="20px;" placeholder={field.placeholder}/>
            </div>
        )
    }

    onSubmit(values) {
        this.props.fetchPractices(values, () => {
            // TODO - remove the callback as properties are directly available!!!
            this.props.history.push('/practices');
        });
        this.props.history.push('/practices');
    }

    render() {
        const {fields: {practiceName, procedureName, zip, insuranceProvider}, handleSubmit} = this.props;
        return (
            <div className="py-5 text-center opaque-overlay">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 text-white">
                            <h1 className="display-3 mb-4" style={{color: '#000000'}}>Find a Doctor</h1>
                                <p className="lead mb-5" style={{color: '#000000'}}>Not Feeling Well?</p>
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="input-group">
                                <Field name="consultantName" placeholder="Consultant Name" component={this.renderField}/>
                                <Field name="practiceName" placeholder="Practice/Provider Name" component={this.renderField}/>
                                <Field name="procedureName" placeholder="Procedure/Condition" component={this.renderField}/>
                                <Field name="zip" placeholder="Zip Code" component={this.renderField}/>
                                <Field name="insuranceProvider" placeholder="Insurance" component={this.renderField} />
                                <button type="submit" className="btn btn-secondary">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default reduxForm({
    form: 'FindDoctorsForm',
    fields: ['practiceName', 'procedureName','zip','insuranceProvider']
})(connect(null, {fetchPractices: fetchConsultants})(FindDoctors));