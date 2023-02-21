import React, { useState } from "react";
import SearchResult from "../SearchResult";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state. 
  const [userInput, setUserInput] = useState("")
  const [country, setCountry] = useState(null)

  const handleChange = (event) => {

    setUserInput(event.target.value)
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    fetchData();

  };

  async function fetchData() {
    const response = await fetch(`https://restcountries.com/v2/name/${userInput}`);
    const data = await response.json();
    setCountry(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input onChange={handleChange} type="text" />
        <button>search</button>
      </form>
      {/* show the country you received from fetch and saved in the local state (use SearchResult component to display that country) */}
      {country && <SearchResult data={country} />}
    </div>
  );
}
