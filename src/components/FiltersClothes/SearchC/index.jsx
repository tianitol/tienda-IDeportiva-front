import { useRef } from "react";


const SearchC = (props) =>{

    let inputTexto = useRef();
    
    const handleClick = () =>{
        props.filterClothes(inputTexto.current.value)
    } 
    return(
        <>
        <nav className="avbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" rol="search">
                    <div>
                        <input type="text" ref={inputTexto} className="form-control" placeholder="Buscar" aria-label="Search"/>
                        <input onClick={handleClick} type="button" className="btn btn-primary" value="Buscar" />
                    </div>
                </form>
            </div>
        </nav>
        </>
    )

}
export default SearchC