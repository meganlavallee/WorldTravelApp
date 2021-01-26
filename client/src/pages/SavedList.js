import React, { useState, useEffect } from "react";
import ButtonAppBar from "../components/ButtonAppBar";
import VerticalTabs from "../components/VerticalTabs";
import entriesList from "../utils/api";


function SavedList() {
  const [entries, setEntries] = useState([]);

  async function getAllPlaces() {
    const entries = await entriesList();
    setEntries(entries);
  }

  useEffect(() => {
    getAllPlaces();
  }, []);

  // console.log(entries);
  return (
    <div>
      <h1 className="apptitle">World Travel App</h1>
      <ButtonAppBar />
      <VerticalTabs entries={entries}/>
    </div>
  );
}

export default SavedList;
