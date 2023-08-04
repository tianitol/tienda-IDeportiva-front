/* eslint-disable react/prop-types */
import StateContext from "./StateContext";
import { useState } from "react";

const StateProvider = ({ children }) => {
  let [shoes, setShoes] = useState([]);
  let [clothes, setClothes] = useState([]);
  let [accessories, setAccessories] = useState([]);
  let [filteredShoes, setFilteredShoes] = useState([]);
  let [shoe, setShoe] = useState({
        id: "",
        name:"",
        price:"",
        description:"",
        image:"",
        size:"",
        brand:"",
        gender:""
  })

  const getShoesName = ()=>{
    return initialState.map(shoe =>shoe.name);
  }
  const addShoes = (shoe) =>{
    setShoes([...initialState, shoe]);
  }

  const loadShoes = (data) => {
    console.log("llegó la data de shoes", data);
    setShoes(data);
    setFilteredShoes(data);
  };
  const loadFilteredShoes = (data) =>{
    setFilteredShoes(data)
  }

  const loadClothes = (data) => {
    console.log("llegó la data de clothes", data);
    setClothes(data);
  };

  const loadAccessories = (data) => {
    console.log("llegó la data de accessories", data);
    setAccessories(data);
  };

  const initialState = {
    shoes,
    shoe,
    clothes,
    accessories,
    filteredShoes,
    getShoesName,
    addShoes,
    loadShoes,
    loadFilteredShoes,
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
