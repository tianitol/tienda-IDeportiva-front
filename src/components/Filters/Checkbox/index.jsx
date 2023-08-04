import { useState,useEffect,useContext } from "react";
import StateContext from '../../../store/StateContext';

const Checkbox = () =>{ //la definicion de los los useState y useContext es en plural
    
    let[genders, setGenders] = useState([]); //genero del zapato 
    let{shoes} = useContext(StateContext);
    
    useEffect(()=>{
        if (shoes){
            let shoesMapeados = shoes.map(shoe =>shoe.gender);
            let gendersSet = new Set(shoesMapeados);
            let arrGenderNoRepite = Array.from(gendersSet);
            setGenders(arrGenderNoRepite);
        }
    },[shoes]);

        return(
        <>
        {
            genders.map((genero,index)=>{
                return(
                    <div key={index} className="form-check-form-inline">
                        <input value={genero} className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">{genero}</label>
                    </div>
                )
                })
        }
        </>
    );   
}

export default Checkbox;
