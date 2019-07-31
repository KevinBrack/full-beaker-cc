import React from "react";

const InputForm = props => {
  const { setParams } = props;
  const categories = [
    "",
    "fashion",
    "nature",
    "backgrounds",
    "science",
    "education",
    "people",
    "feelings",
    "religion",
    "health",
    "places",
    "animals",
    "industry",
    "food",
    "computer",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music"
  ];
  return (
    <div>
      INPUT FORM
      <form>
        <div>
          <label htmlFor="search-form" />
          <input type="text" id="search-form" name="search-form" />
        </div>
        <div>
          <label htmlFor="category-select" />
          <select id="category-select">
            {categories.map(category => {
              return <option key={category}>{category}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
