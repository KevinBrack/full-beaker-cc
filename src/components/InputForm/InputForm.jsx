import React, { useState, useContext } from "react";
import { AppContext } from "../App/AppContext";
import { categories } from "../../data";

const InputForm = props => {
  const { setParams } = useContext(AppContext);
  const [searchString, setSearchString] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let params = "";
    if (searchString) {
      let search = searchString;
      search = search
        .trim()
        .split(" ")
        .join("+");
      params += `&q=${search}`;
    }
    if (searchCategory) {
      params += `&category=${searchCategory}`;
    }
    setParams(params);
  };

  return (
    <div>
      SEARCHING FOR {searchString.toUpperCase()} IN CATEGORY {/*<--Debugging*/}
      {searchCategory.toUpperCase()}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search-form" />
          <input
            type="text"
            id="search-form"
            value={searchString}
            onChange={e => setSearchString(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category-select" />
          <select
            id="category-select"
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
          >
            {categories.map(category => {
              return <option key={category}>{category}</option>;
            })}
          </select>
        </div>
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default InputForm;
