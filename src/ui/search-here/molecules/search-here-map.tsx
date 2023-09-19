import { useStore } from 'effector-react';
import GoogleMapReact from 'google-map-react';

import '../styles/search-here-map.css'

import { SearchHereDot } from '../molecules/search-here-dot';
import { $infoLatLon } from '../../../functions/stores/info-location';

export const SearchHereMap = () => {
    const infoLatLon = useStore($infoLatLon);
    return (
        <div className='SearchHereMap'>
            {infoLatLon &&
                <GoogleMapReact
                    defaultCenter={{
                        lat: infoLatLon.latitude ? infoLatLon.latitude : 0,
                        lng: infoLatLon.longitude ? infoLatLon.longitude : 0
                    }}
                    defaultZoom={10}
                    draggable={false}
                    options={{ fullscreenControl: false, zoomControl: false }}
                >
                    <SearchHereDot />
                </GoogleMapReact>}
        </div>
    );
};