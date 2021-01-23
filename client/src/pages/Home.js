import React, { useState, useEffect } from "react";
import ReactMapGL,{ Marker } from "react-map-gl";
import entriesList from "../utils/api";


export default function Home() {
  const [entries, setEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  useEffect(() => {
    (async () => {
      const entries = await entriesList();
      setEntries(entries);
    })();
  }, []);
  
  // console.log(entries);
  const REACT_APP_MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2x1Z292b3k4MSIsImEiOiJja2s3Yjk3d20wYzhoMnhtaXo0N3MxZnRoIn0.iRRYqUDtPqDSubEVG9RSgw";
  
  //  Rendering (point, setpoint and usestate)
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/slugovoy81/ckk7ccpwo098t18qyk7ydw402"
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
    >
      {entries.map((entry) => (
        <Marker
          key={entry._id}
          latitude={entry.latitude}
          longitude={entry.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <svg 
          className="marker" 
          style={{
            width: `${6 * viewport.zoom}px`,
            height: `${6 * viewport.zoom}px`,
            stroke: '#f8c102'
          }}
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>
      ))}
    </ReactMapGL>
  );
}
