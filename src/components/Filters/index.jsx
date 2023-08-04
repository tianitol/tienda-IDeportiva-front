import { useContext } from 'react';
import StateContext from '../../store/StateContext';
import Checkbox from "./Checkbox";
import Search from "./Search";

const Filters = (props) => {
  let { shoes,  loadFilteredShoes } = useContext(StateContext);

  const obtenerCheckeados = () => {
    let checkeados = document.querySelectorAll("input[type=checkbox]:checked");
    checkeados = Array.from(checkeados);
    let checkeadosValues = checkeados.map((checkbox) => checkbox.value);
    return checkeadosValues;
  };
  const filterShoes = (text) => {
    let checkeados = obtenerCheckeados();
    console.log(checkeados);
    let shoesFilterForText = shoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log(shoesFilterForText);
    if (text === "") {
      loadFilteredShoes(shoes);
    } else {
      loadFilteredShoes(shoesFilterForText);
      console.log("Filtra");
    }
    if (checkeados.length > 0) {
      let shoesFilterForGender = shoesFilterForText.filter((shoe) =>
        checkeados.includes(shoe.gender)
      );
      loadFilteredShoes(shoesFilterForGender);
      console.log(shoesFilterForGender);
      console.log(checkeados);
    } else {
      loadFilteredShoes(shoesFilterForText);
    }
  };

  return (
    <>
      <Checkbox />
      <Search filterShoes={filterShoes} />
    </>
  );
};
export default Filters;
