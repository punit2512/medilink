import React, {Component} from 'react';
import Geocode from 'react-geocode';
import ReactDOM from 'react-dom';
export default class GoogleMap extends Component {
    componentDidMount() {
        const google=window.google;
        const node = ReactDOM.findDOMNode(this.refs.map);
        new google.maps.Map(node, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
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
