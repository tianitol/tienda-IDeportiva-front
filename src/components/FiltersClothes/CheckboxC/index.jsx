import { useState,useEffect,useContext } from "react";
import StateContext from '../../../store/StateContext';

const CheckboxC = () =>{
    let [colors, setColors] = useState([])
    let {clothes} = useContext(StateContext);
    
    useEffect(() =>{
        if (clothes) {
            let clothesMapeadas = clothes.map(clothe => clothe.color);
            let colorsSet = new Set(clothesMapeadas);
            let arrColorNoRepite = Array.from(colorsSet);
            setColors(arrColorNoRepite);
        }
    },[clothes])

return(
    <>
    {
        colors.map((color, index)=>{
            return(
            <div key={index} className="form-check-form-inline">
                <input value={color} className="form-check-input" type="checkbox" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">{color}</label>
            </div>
            )
        })
    }
    </>
)
}
export default CheckboxC