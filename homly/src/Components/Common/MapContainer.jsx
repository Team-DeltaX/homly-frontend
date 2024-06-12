import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function SimpleMap({ name, address, photo }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: address,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          },
        });
        console.log("mappppp",process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
        console.log("mapppppidddddd",process.env.REACT_APP_GOOGLE_MAP_ID);
        const location = response.data.results[0].geometry.location;
        setLat(location.lat);
        setLng(location.lng);
      } catch (error) {
        console.error("Error fetching the coordinates: ", error);
      }
    };

    if (address) {
      getCoordinates();
    }
  }, [address]);

  const position = { lat: lat, lng: lng };

  if (lat === null || lng === null) {
    return <div>Loading map...</div>;
  }

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}> 
      <div style={{ height: "30vh", width: "100%" }}>
        <Map
          defaultZoom={13}
          center={position}
          mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"red"}
              borderColor={"white"}
              glyphColor={"white"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingBottom: '1rem', paddingRight:'1rem', paddingLeft:'1rem' }}>
                <img style={{ height: "10vh", width: "10vh", borderRadius: "50%" }} src={photo} alt="Holiday Home" />
                <div style={{ justifyContent: "space-between", alignItems: "center", marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>{name}</h3>
                  <p>{address}</p>
                </div>
                
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
