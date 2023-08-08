import Checkbox from "./Checkbox";
import Search from "../Search";
import StateContext from "../../store/StateContext";
import { useContext } from "react";

const AccessoriesFilters = (props) => {
  let { accessories, loadFilteredAccessories } = useContext(StateContext);

  const obtenerCheckeados = () => {
    let checkeados = document.querySelectorAll("input[type=checkbox]:checked");
    checkeados = Array.from(checkeados);
    let checkeadosValues = checkeados.map((checkbox) => checkbox.value);
    return checkeadosValues;
  };
  const filterAccessories = (text) => {
    let checkeados = obtenerCheckeados();
    console.log(checkeados);
    let accessoriesFilterForText = accessories.filter((accessory) =>
      accessory.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log(accessoriesFilterForText);
    if (text === "") {
      loadFilteredAccessories(accessories);
    } else {
      loadFilteredAccessories(accessoriesFilterForText);
      console.log("Filtra");
    }
    if (checkeados.length > 0) {
      let accessoriesFilterForCategory = accessoriesFilterForText.filter(
        (accessory) => checkeados.includes(accessory.category)
      );
      loadFilteredAccessories(accessoriesFilterForCategory);
      console.log(accessoriesFilterForCategory);
      console.log(checkeados);
    } else {
      loadFilteredAccessories(accessoriesFilterForText);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flex: "flex-basis",
        margin: "2% 0",
      }}
    >
      <Checkbox style={{ margin: "1em" }} />
      <Search dataFiltered={filterAccessories} />
    </div>
  );
};
export default AccessoriesFilters;
