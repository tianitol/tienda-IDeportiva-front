import CheckboxC from "./CheckboxC";
import SearchC from "./SearchC";
import StateContext from "../../store/StateContext";
import { useContext } from "react";

const FiltersClothes = () => {
  let { clothes, loadFilteredClothes } = useContext(StateContext);

  const obtenerCheckeados = () => {
    let checkeados = document.querySelectorAll("input[type=checkbox]:checked");
    checkeados = Array.from(checkeados);
    let checkeadosValues = checkeados.map((checkbox) => checkbox.value);
    return checkeadosValues;
  };

  const filterClothes = (text) => {
    let checkeados = obtenerCheckeados();
    console.log(checkeados);
    let clothesFilterForText = clothes.filter((clothe) =>
      clothe.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log(clothesFilterForText);

    if (text === "") {
      if (checkeados.length > 0) {
        console.log("sin texto con checkbox");
        let clothesFilterForColor = clothes.filter((clothe) =>
          checkeados.includes(clothe.color)
        );
        loadFilteredClothes(clothesFilterForColor);
        console.log(clothesFilterForColor);
        console.log(checkeados);
      } else {
        console.log("sin texto sin checkbox");

        loadFilteredClothes(clothes);
      }
    } else {
      if (checkeados.length < 1) {
        console.log("con texto sin checkbox");
        loadFilteredClothes(clothesFilterForText);
      } else {
        console.log("con texto con checkbox");
        let clothesFilterForColor = clothesFilterForText.filter((clothe) =>
          checkeados.includes(clothe.color)
        );
        loadFilteredClothes(clothesFilterForColor);
        console.log(clothesFilterForColor);
        console.log(checkeados);
      }
    }
  };
  return (
    <>
      <CheckboxC />
      <SearchC filterClothes={filterClothes} />
    </>
  );
};

export default FiltersClothes;
