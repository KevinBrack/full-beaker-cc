import React, { useState, useContext, Fragment } from "react";
import { AppContext } from "../App/AppContext";
import { categories } from "../../data";
import "./InputForm.scss";

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
    <Fragment>
      <form onSubmit={handleSubmit} className="form">
        <div>
          {/* <label htmlFor="search-form">Keyword...</label> */}
          <input
            className="form-text-input"
            type="text"
            id="search-form"
            value={searchString}
            placeholder="Keyword..."
            onChange={e => setSearchString(e.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="category-select" /> */}
          <select
            className="form-select-input"
            id="category-select"
            value={searchCategory}
            onChange={e => setSearchCategory(e.target.value)}
          >
            {categories.map(category => {
              return (
                <option key={category} value={category}>
                  {category === "" ? "Category..." : category}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="form-submit-button">
          Search
        </button>
      </form>
    </Fragment>
  );
};

export default InputForm;
