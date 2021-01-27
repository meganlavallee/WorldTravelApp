// Packages and Variables
import React, { useState, useEffect } from "react";
import ButtonAppBar from "../components/ButtonAppBar";
import VerticalTabs from "../components/VerticalTabs";
import entriesList from "../utils/api";

// Saved List Function
function SavedList() {
  const [entriesArray, setEntries] = useState({
    entries: [],
    searchedEntries: [],
    search: "",
  });
  
  // Get All Places Component Fuction
  async function getAllPlaces() {
    // States
    let entriesAll = await entriesList();
    let entriesData = entriesAll.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setEntries({
      ...entriesArray,
      searchedEntries: entriesData,
      entries: entriesData,
    });
  }
  // Effect
  useEffect(() => {
    getAllPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Search Function
  const handleSearch = (event) => {
    event.preventDefault();
    const entries = entriesArray.entries;
    let charsForFilter = event.target.value.toLowerCase().trim();
    setEntries({
      ...entriesArray,
      search: charsForFilter,
    });
    let newEntriesArray = entries.filter((entry) =>
      entry.title.toLowerCase().includes(charsForFilter)
    );
    setEntries({
      ...entriesArray,
      searchedEntries: newEntriesArray,
    });
  };
  // Render
  return (
    <div>
      <h1 className="apptitle">World Travel App</h1>
      <ButtonAppBar />
      <div className="d-flex justify-content-center">
        <form className="formInput d-flex mt-5 mb-5 w-25">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Type here..."
            aria-label="Search"
            onChange={handleSearch}
            name="search"
          />
        </form>
      </div>
      <VerticalTabs entries={entriesArray.searchedEntries} />
    </div>
  );
}

export default SavedList;