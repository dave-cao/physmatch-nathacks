import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import "./Maps.css"
const libraries = ['places'];
const mapContainerStyle = {
    width: '50vw',
    height: '90vh',
};
const center = {
    lat: 53.531611,
    lng: -113.523975
};

function MapContainer() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDbhrniApnpr9WGowLPmlbqZKdLD5xwRPU', 
        libraries,
    });
    

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className='google-maps'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} title={"Hello world!"}/>
            </GoogleMap>
        </div>
    );
}

export default MapContainer;
