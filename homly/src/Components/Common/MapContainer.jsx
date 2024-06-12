import React from "react";
import GoogleMapReact from 'google-map-react';
import { AdvancedMarker } from "@vis.gl/react-google-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 7.8731,
      lng: 80.7718
    },
    zoom: 6
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={7.8731}
          lng={80.7718}
          text="My Marker"
        />
        {/* make a marker in map */}
        
          <AdvancedMarker
            position={{ lat: 7.8731, lng: 80.7718 }}
          />

      </GoogleMapReact>
    </div>
  );
}