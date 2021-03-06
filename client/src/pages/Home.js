// Packages and Variables
import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import entriesList from "../utils/api";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import OldMarkers from "../components/OldMarkers";
import NewMarkers from "../components/NewMarkers";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// Main Function Component
export default function Home() {
  // States
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
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
// get all entries
  async function getAllPlaces() {
    const entries = await entriesList();
    setEntries(entries);
  }

  useEffect(() => {
    getAllPlaces();
  }, []);
// Function to show all markers
  const showNewMarker = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewLocation({
      latitude,
      longitude,
    });
  };
// logout
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  require('dotenv').config();

  //  Rendering (point, setpoint and usestate)
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/slugovoy81/ckk7ccpwo098t18qyk7ydw402"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onDblClick={showNewMarker}
    >
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <div className="buttonDiv">
        <Button
          onClick={handleLogout}
          className="logoutBtn"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.36)",
            color: "red",
            fontWeight: "600",
          }}
        >
          Log Out
        </Button>
        <Link to="/savedlist" className="savedLink">
          <Button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.36)",
              color: "red",
              fontWeight: "600",
            }}
          >
            Saved cities
          </Button>
        </Link>
      </div>
      {entries.map((entry) => (
        <OldMarkers
          key={entry._id}
          entry={entry}
          setPopup={setPopup}
          showPopup={showPopup}
          viewport={viewport}
        />
      ))}
      {newLocation ? (
        <NewMarkers
          newLocation={newLocation}
          viewport={viewport}
          setNewLocation={setNewLocation}
          getAllPlaces={getAllPlaces}
          showNewMarker={showNewMarker}
        />
      ) : null}
    </ReactMapGL>
  );
}
