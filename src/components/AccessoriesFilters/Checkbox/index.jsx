import { useState, useEffect, useContext } from "react";
import StateContext from '../../../store/StateContext';

const Checkbox = () => { //la definicion de los los useState y useContext es en plural

    let [categories, setCategories] = useState([]);
    let { accessories } = useContext(StateContext);

    useEffect(() => {
        if (accessories) {
            let accessoriesMapeados = accessories.map(accessory => accessory.category);
            let categoriesSet = new Set(accessoriesMapeados);
            let arrCategoryNoRepite = Array.from(categoriesSet);
            setCategories(arrCategoryNoRepite);
        }
    }, [accessories]);

    return (
        <>
            {
                categories.map((category, index) => {
                    return (
                        <div key={index} className="form-check-form-inline">
                            <input value={category} className="form-check-input" type="checkbox" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">{category}</label>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Checkbox;
