import React, {Component} from 'react';

export default class LanguageGenderBar extends Component {
    render() {
        return (
            <div className="col-md-12 breadcrumb">
                <select name="Language">
                    <option value="volvo">Language</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <select name="Gender">
                    <option value="volvo">Gender</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <input type="range" id="myRange" value="90">

                    <select name="Sort">
                        <option value="volvo">Sort</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </input>
            </div>

        )
    }
}