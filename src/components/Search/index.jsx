import { useRef } from "react";

const Search = (props) => {
  let inputTexto = useRef();

  return (
    <>
      <nav className="avbar bg-body-tertiary">
        <div className="container-fluid">
          <form
            className="d-flex"
            rol="search"
            style={{ margin: "0 1em", display: "flex", width: "80%" }}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <input
                type="text"
                ref={inputTexto}
                className="form-control"
                placeholder="Buscar"
                aria-label="Search"
              />
              <input
                onClick={() => props.dataFiltered(inputTexto.current.value)}
                type="button"
                className="btn btn-primary"
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Search;
