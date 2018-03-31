import React, {Component} from 'react';
import UpperNav from "./uppernav";
import FindDoctors from "./find_doctors";
import LanguageGenderBar from "./language_gender";
import DoctorList from "./doctor_list";

export default class App extends Component {
    render() {
        return (
            <div>
                <UpperNav/>
                <FindDoctors/>
                <LanguageGenderBar/>
                <DoctorList/>
            </div>
        );
    }
}