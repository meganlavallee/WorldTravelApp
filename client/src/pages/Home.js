import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Home() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vw",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/slugovoy81/ckk7ccpwo098t18qyk7ydw402"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}
