// Package and Variables
import React, { useState, useEffect } from "react";
import ButtonAppBar from "../components/ButtonAppBar";
import VerticalTabs from "../components/VerticalTabs";
import entriesList from "../utils/api";

// Main Component
function SavedList() {
  // State
  const [entries, setEntries] = useState([]);
// get places and sort them
  async function getAllPlaces() {
    let entriesAll = await entriesList();
    let entries = entriesAll.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
    setEntries(entries);
  }
// fire once when page loads
  useEffect(() => {
    getAllPlaces();
  }, []);

// Rendering
  return (
    <div>
      <h1 className="apptitle">World Travel App</h1>
      <ButtonAppBar />
      <VerticalTabs entries={entries}/>
    </div>
  );
}

export default SavedList;
