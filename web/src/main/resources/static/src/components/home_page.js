import React, {Component} from 'react';
import FindDoctors from "./find_doctors";
import HowItWorks from "./how_it_works";
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <FindDoctors history={this.props.history}/>
                <HowItWorks/>
            </div>
        )
    }
}