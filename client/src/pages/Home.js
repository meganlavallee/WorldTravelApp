import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import entriesList from "../utils/api";

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

  useEffect(() => {
    (async () => {
      const entries = await entriesList();
      setEntries(entries);
    })();
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
        <>
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
          
          >
            <div
              onClick={() =>
                setPopup({
                  [entry._id]: true,
                })
              }
            >
              <svg
                className="marker red"
                style={{
                  width: `${5 * viewport.zoom}px`,
                  height: `${5 * viewport.zoom}px`,
                  stroke: "green",
                }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </Marker>
          {showPopup[entry._id] ? (
            <Popup
              latitude={entry.latitude}
              longitude={entry.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setPopup({})}
              anchor="top"
            >
              <div className="popup">
                <h3>{entry.title}</h3>
                <p>{entry.comments}</p>
                <small>
                  Visited on: {new Date(entry.visitDate).toLocaleDateString()}
                </small>
                {entry.image && <img src={entry.image} alt={entry.title} />}
              </div>
            </Popup>
          ) : null}
        </>
      ))}
      {newLocation ? (
        <>
          <Marker
            latitude={newLocation.latitude}
            longitude={newLocation.longitude}
          >
            <div>
              <svg
                className="marker blue"
                style={{
                  width: `${5 * viewport.zoom}px`,
                  height: `${5 * viewport.zoom}px`,
                  stroke: "white",
                }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </Marker>
          <Popup
            latitude={newLocation.latitude}
            longitude={newLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setNewLocation(null)}
            anchor="top"
          >
            <div className="popup">
              <h3>Add your info here!</h3>
            </div>
          </Popup>
        </>
      ) : null}
    </ReactMapGL>
  );
}
