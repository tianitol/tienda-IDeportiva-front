import { useContext, useRef } from "react";
import StateContext from '../../../store/StateContext';

const Search = (props) =>{
    //let {shoes} = useContext(StateContext);
    let inputTexto = useRef();

    return(
        <>
        <nav className="avbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" rol="search">
                    <div>
                        <input type="text" ref={inputTexto} className="form-control" placeholder="Buscar" aria-label="Search"/>
                        <input onClick={()=>props.filterShoes(inputTexto.current.value)} type="button" className="btn btn-primary" value="Buscar" />
                    </div>
                </form>
            </div>
        </nav>
        </>
    )
}
export default Search;