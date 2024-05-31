import { useState } from 'react';
import {
    APIProvider, 
    Map, 
    AdvancedMarker
} from '@vis.gl/react-google-maps';

function GoogleMap() {
    const position = { 
        lat: 7.8731,
        lng: 80.7718
    };

  return (
    <APIProvider apiKey={'yFCShebT8weNf10Ib_tNlv1D5F_BY0nHhGixBdgRfOw'}>
      <Map 
        defaultCenter={position} 
        defaultZoom={10}>
        <AdvancedMarker
            position={position}
        >

        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}

export default GoogleMap;