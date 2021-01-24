import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import entriesList from "../utils/api";
// import NewLocationForm from "../components/NewLocationForm"
import OldMarkers from "../components/OldMarkers"
import NewMarkers from "../components/NewMarkers"

export default function Home() {
  const [showPopup, setPopup] = useState({});
  const [newLocation, setNewLocation] = useState(null);
  const [entries, setEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  async function getAllPlaces() {
    const entries = await entriesList();
    setEntries(entries);
  }

  useEffect(() => {

    getAllPlaces();
    
  }, []);

  const showNewMarker = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewLocation({
      latitude,
      longitude,
    });
  };

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
      onDblClick={showNewMarker}
    >
      {entries.map((entry) => (
        <OldMarkers  key={entry._id} entry={entry} setPopup={setPopup} showPopup={showPopup} viewport={viewport}/>
      ))}
      {newLocation ? (
        <NewMarkers newLocation={newLocation} viewport={viewport} setNewLocation={setNewLocation} getAllPlaces={getAllPlaces} showNewMarker={showNewMarker}/>
      ) : null}
    </ReactMapGL>
  );
}
