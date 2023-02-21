import React from "react";

export default function SearchResult({ data }) {
  return (
    <div
      style={{
        margin: "20px 10%",
        boxShadow: "6px 6px 10px",
        padding: "10px",
        width: "80%",
        height: "640px",
        borderRadius: "20px",
        fontSize: "27px",
      }}
    >
      <img src={data[0].flag} alt={data[0].name} width="60%" />
      <h1>{data[0].name}</h1>
      <span>
        <b>Capital:</b> {data[0].capital}
      </span>
      <br />
      <span>
        <b> Area:</b> {data[0].area} km<sup>2</sup>
      </span>
      <br />
      <span>
        <b>Population:</b> {data[0].population}
      </span>
    </div>
  );
}
