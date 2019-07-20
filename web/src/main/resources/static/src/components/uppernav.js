import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class UpperNav extends Component {

    renderLinks() {
        console.log('uppernav: props are:', this.props);
        if (this.props.authenticated) {
            return <li className="nav-item" key="signout">
                <Link className="nav-link" to="/signout">Sign Out</Link>
            </li>
        } else {
            return [
                <li className="nav-item" key="signin">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key="signup">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ]
        }

    }

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
                             {this.renderLinks()}
                         </ul>
                         {/*<a className="btn navbar-btn ml-2 text-white btn-secondary" href="signin.html"><i
                             className="fa d-inline fa-lg fa-user-circle-o"></i> Sign in</a>*/}
                     </div>
                 </div>
             </nav>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps from signin: state=', state);
    var authenticated = false;
    if (state.auth && state.auth.auth) {
        authenticated = state.auth.auth.authenticated;
    }
    return {authenticated};
}

export default connect(mapStateToProps, null)(UpperNav);