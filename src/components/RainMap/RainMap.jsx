import React, {Component} from 'react';
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import Paper from 'material-ui/Paper';

class Contacts extends Component {

    componentDidMount () {
    }

    render() {
        const MyMapComponent = compose(
            withProps({
                googleMapURL:
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div className="container" style={{ height: `800px` }} />,
                mapElement: <div style={{ height: `100%` }} />
            }),
            withScriptjs,
            withGoogleMap
        )(props => (
            <GoogleMap defaultZoom={7.8} defaultCenter={{ lat: 42.87472, lng: 25.33417 }}>
                <Marker position={{ lat: 42.12708, lng: 24.74050 }} />
            </GoogleMap>
        ));
        return <Paper>
            <MyMapComponent key="map" />
        </Paper>


    }
}

export default Contacts;
