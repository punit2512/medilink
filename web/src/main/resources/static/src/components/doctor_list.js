import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPractices} from "../actions";
import GoogleMap from "./google_map";


class DoctorList extends Component {


    getLatLong(zip) {
        var lat = '';
        var lng = '';
        var address = zip;

    }
    renderPractice(practice) {
        var lon = 12.35;
        var lat = 78.25;
        console.log('practice is:', practice);
        return (
            <tr key={practice.practiceName}>
                <td><img src="img/12243zoom.jpg" className="img-thumbnail" alt="Cinque Terre"/></td>
                <td><p>{practice.practiceName}</p>
                    <p>{practice.addresses[0].city} , {practice.addresses[0].state}  {practice.addresses[0].zip}  <a href="#">Directions</a></p>
                    <p>{practice.addresses[0].addressLine1} </p>
                         <span
                            className="fa fa-star checked"></span> <span
                            className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span> <span
                            className="fa fa-star"></span> <span
                            className="fa fa-star"></span>
                </td>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><p><img src="img/Email.png"/></p><p><img src="img/message.jpg"/></p></td>
                <td>
                    <div>
                        <p>Mon, 9/25 <button className="btn btn-primary">12:00</button>&nbsp;
                            <button className="btn btn-primary disabled">12:30</button>
                            &nbsp;
                            <button className="btn btn-primary disabled">13:00</button>
                            &nbsp;
                            <button className="btn btn-primary disabled">13:30</button>
                            &nbsp;
                            <button className="btn btn-primary">14:00</button>
                        </p>
                        <p>Tues, 9/26 <button className="btn btn-primary">12:00</button>&nbsp;
                            <button className="btn btn-primary ">12:30</button>
                            &nbsp;
                            <button className="btn btn-primary ">13:00</button>
                            &nbsp;
                            <button className="btn btn-primary disabled">13:30</button>
                            &nbsp;
                            <button className="btn btn-primary">14:00</button>
                        </p>
                        <p>Wed, 9/27 <button className="btn btn-primary">12:00</button>&nbsp;
                            <button className="btn btn-primary disabled">12:30</button>
                            &nbsp;
                            <button className="btn btn-primary ">13:00</button>
                            &nbsp;
                            <button className="btn btn-primary disabled">13:30</button>
                            &nbsp;
                            <button className="btn btn-primary">14:00</button>
                        </p>
                    </div>

                </td>
            </tr>
        );
    }

    renderPractices() {
        return _.map(this.props.practices, practice => {
            return (
                this.renderPractice(practice)
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
                                {this.renderPractices()}
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

function mapStateToProps({practices}) {
    return {practices};
}

export default connect(mapStateToProps, null)(DoctorList);
