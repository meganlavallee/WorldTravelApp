import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Home() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vw",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });
  const REACT_APP_MAPBOX_TOKEN = 'pk.eyJ1Ijoic2x1Z292b3k4MSIsImEiOiJja2s3Yjk3d20wYzhoMnhtaXo0N3MxZnRoIn0.iRRYqUDtPqDSubEVG9RSgw';

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/slugovoy81/ckk7ccpwo098t18qyk7ydw402"
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}
