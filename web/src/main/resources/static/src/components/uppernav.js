import React, {Component} from 'react';

export default class UpperNav extends Component {
    render() {
        return (
             <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                 <div className="container">
                     <a className="navbar-brand" href="#"><i className="fa d-inline fa-lg fa-cloud"></i><b> Brand</b></a>
                       <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                 data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent"
                                 aria-expanded="false"
                                 aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                     <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
                         <ul className="nav navbar-nav">
                             <li className="nav-item">
                                 <a className="nav-link" href="#"><i className="fa d-inline fa-lg fa-bookmark-o"></i> Register as Practitioner</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="signup.html"><i className="fa d-inline fa-lg fa-envelope-o"></i> Sign up</a>
                             </li>
                         </ul>
                         <a className="btn navbar-btn ml-2 text-white btn-secondary" href="signin.html"><i
                             className="fa d-inline fa-lg fa-user-circle-o"></i> Sign in</a>
                     </div>
                 </div>
             </nav>
        );
    }
}