/* eslint-disable react/prop-types */
import StateContext from "./StateContext";
import { useState } from "react";

const StateProvider = ({ children }) => {
  let [shoes, setShoes] = useState([]);
  let [clothes, setClothes] = useState([]);
  let [accessories, setAccessories] = useState([]);

  const loadShoes = (data) => {
    console.log("llegó la data", data);
    setShoes(data);
  };

  const loadClothes = (data) => {
    setClothes(data);
  };

  const loadAccessories = (data) => {
    setAccessories(data);
  };

  const initialState = {
    shoes,
    clothes,
    accessories,
    loadShoes,
    loadClothes,
    loadAccessories,
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
