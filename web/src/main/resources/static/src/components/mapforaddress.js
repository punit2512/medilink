import React, {Component} from 'react';
import Geocode from "react-geocode";

export default class MapForAddress extends Component {
    componentDidMount() {
        Geocode.setApiKey("AIzaSyDjkpKsYyXNeF44G8q58lpxC6W0BIYR1zg");

        // Get latidude & longitude from address.
        Geocode.fromAddress(this.props.address).then(
            response => {
                const google=window.google;
                const { lat, lng } = response.results[0].geometry.location;
                new google.maps.Map(this.refs.map, {
                    zoom: 12,
                    fullScreenControl: true,
                    center: {
                        lat: lat,
                        lng: lng
                    }
                });

                console.log('lat=' + lat + 'lng=' + lng);
            },
            error => {
                console.error(error);
            }
        );


    }
    render() {
        const style = {
            width: `${this.props.width}`,
            height: `${this.props.height}`
        }
        return (
            <div ref="map" style={style}></div>
        );
    }
}
