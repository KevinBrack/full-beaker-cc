import { useState, useEffect } from "react";

// CUSTOM HOOK TO MATCH FAV STATE WITH LOCAL STORAGE
const useFav = () => {
  const initialFavs = () => JSON.parse(localStorage.getItem("localFav")) || {};
  const [favorites, setFavorites] = useState(initialFavs);

  const addFav = fav => {
    // console.log(`IN HOOK SETTING ${fav}`);
    const newFav = { ...favorites };
    newFav[fav] = true;
    setFavorites(newFav);
  };

  const delFav = fav => {
    // console.log(`IN HOOK REMOVING ${fav}`);
    const newFav = { ...favorites };
    delete newFav[fav];
    setFavorites(newFav);
  };

  useEffect(() => {
    // console.log("SETTING LOCAL FAVORITES");
    localStorage.setItem("localFav", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, addFav, delFav };
};

export default useFav;
