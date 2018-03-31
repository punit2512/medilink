import React, {Component} from 'react';

export default class FindDoctors extends Component{
    render() {
        return (
            <div className="py-5 text-center opaque-overlay">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 text-white">
                            <h1 className="display-3 mb-4" style={{color:'#000000'}}>Find a Doctor</h1>
                            <p className="lead mb-5" style={{color:'#000000'}}>Not Feeling Well?</p>
                            <input name="lname" placeholder="Practice/Provider Name" className="btn-group"
                                   type="&quot;text&quot;&quot;" size="20px;"/>
                            <input type="text" name="lname" placeholder="Procedure/Condition" className="btn-group"
                                   size="20px;"/>
                            <input name="lname" placeholder="Zip Code" className="btn-group"
                                   type="&quot;text&quot;&quot;" size="20px;"/>
                            <input type="text" name="lname" placeholder="Insurance" className="btn-group" size="20px;"/>
                            <a href="SearchResults.html" className="btn btn-secondary">Search</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}