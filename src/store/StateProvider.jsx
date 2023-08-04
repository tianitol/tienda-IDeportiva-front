/* eslint-disable react/prop-types */
import StateContext from "./StateContext";
import { useState } from "react";

const StateProvider = ({ children }) => {
  let [shoes, setShoes] = useState([]);
  let [clothes, setClothes] = useState([]);
  let [accessories, setAccessories] = useState([]);
  let [filteredShoes, setFilteredShoes] = useState([]);
  let [filteredClothes,setFilteredClothes] =useState([]);
  let [filteredAccessories, setFilteredAccessories] = useState([]);
  /*let [shoe, setShoe] = useState({
        id: "",
        name:"",
        price:"",
        description:"",
        image:"",
        size:"",
        brand:"",
        gender:""
  });
  let [clothe, setClothe] = useState({
        id: "",
        name:"",
        color:"",
        size:"",
        price:"",
        description:"",
        image:""
  })

  const getShoesName = ()=>{
    return initialState.map(shoe =>shoe.name);
  }
  const addShoes = (shoe) =>{
    setShoes([...initialState, shoe]);
  }
  */
  const loadShoes = (data) => {
    console.log("llegó la data de shoes", data);
    setShoes(data);
    setFilteredShoes(data);
  };
  const loadFilteredShoes = (data) =>{
    setFilteredShoes(data)
  }
/* =====CLOTHES======== */
 /* const getClothesName = ()=>{
    return initialState.map(clothe =>clothe.name);
  }
  const addClothes = (clothe) =>{
    setClothes([...initialState, clothe]);
  }
*/
  const loadClothes = (data) => {
    console.log("llegó la data de clothes", data);
    setClothes(data);
    setFilteredClothes(data);
  };
  const loadFilteredClothes = (data) =>{
    setFilteredClothes(data)
  }
/*======Accessories======== */
  const loadAccessories = (data) => {
    console.log("llegó la data de accessories", data);
    setAccessories(data);
    setFilteredAccessories(data)
  };
  const loadFilteredAccessories = (data) =>{
    setFilteredAccessories(data)
  }

  const initialState = {
    shoes,
    clothes,
    accessories,
    filteredShoes,
    filteredClothes,
    loadShoes,
    loadFilteredShoes,
    loadClothes,
    loadFilteredClothes,
    loadAccessories,
    loadFilteredAccessories,
    filteredAccessories
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
