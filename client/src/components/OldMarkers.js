import React from "react";
import { Marker, Popup } from "react-map-gl";

function OldMarkers({ entry, setPopup, showPopup, viewport }) {
   
  return (

      <React.Fragment key={entry._id}>
          <Marker
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
                <p>Comments: {entry.comments}</p>
                <p>Description: {entry.description}</p>
                <small>
                  Visited on: {new Date(entry.visitDate).toLocaleDateString()}
                </small>
                <p>Rating: {entry.rating}</p>
                {entry.image && <img src={entry.image} alt={entry.title} />}
              </div>
            </Popup>
          ) : null}
        </React.Fragment>
  )
  
  
}

export default OldMarkers;
