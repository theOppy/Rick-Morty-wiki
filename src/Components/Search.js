import React from "react";
import "../App.css"


const Search = ({setSearch, setPageNumber}) => {
  return (
    <div className="d-flex justify-content-center gap-3 my-3">
      <input
        type="text"
        placeholder="Search for Characters"
        className="input"
        onChange={(e)=>{
            setSearch(e.target.value) 
            setPageNumber(1)
        }}
      />
      <button onClick={(e)=>{e.preventDefault()}} className="btn btn-primary">Search</button>
    </div>
  );
};

export default Search;
