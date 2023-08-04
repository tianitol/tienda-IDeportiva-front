import { useContext } from 'react';
import StateContext from '../../store/StateContext';
import CheckboxC from "./CheckboxC";
import SearchC from "./SearchC";

const FiltersClothes = () =>{
    let {clothes, loadFilteredClothes, filteredClothes} = useContext(StateContext);
    
    const obtenerCheckeados = () => {
        let checkeados = document.querySelectorAll("input[type=checkbox]:checked");
        checkeados = Array.from(checkeados);
        let checkeadosValues = checkeados.map((checkbox) => checkbox.value);
        return checkeadosValues;
    };

    const filterClothes = (text) =>{
        let checkeados = obtenerCheckeados();
        console.log(checkeados);
        let clothesFilterForText = clothes.filter((clothe) =>
        clothe.name.toLowerCase().includes(text.toLowerCase())
        );
        console.log(clothesFilterForText);
        if (text === "") {
            loadFilteredClothes(clothes);

        }else{    
            loadFilteredClothes(clothesFilterForText);
        }
        if (checkeados.length > 0) {
            let clothesFilterForColor = clothesFilterForText.filter((clothe)=>
            checkeados.includes(clothe.color)
            );
            loadFilteredClothes(clothesFilterForColor);
            console.log(clothesFilterForColor);
            console.log(checkeados);
        }else{
            loadFilteredClothes(clothesFilterForText)
        }
    };
    return(
        <>
        <CheckboxC/>
        <SearchC filterClothes = {filterClothes}/>
        </>
    )

}

export default FiltersClothes;