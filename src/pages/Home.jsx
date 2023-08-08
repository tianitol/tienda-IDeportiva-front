/* eslint-disable react/prop-types */
import AccessoriesFilters from "../components/AccessoriesFilters";
import Filters from "../components/Filters";
import FiltersClothes from "../components/FiltersClothes";
import ProductCard from "../components/ProductCard";
import StateContext from "../store/StateContext";
import { useContext } from "react";

const Home = ({ show }) => {
  const {
    shoes,
    filteredShoes,
    accessories,
    clothes,
    filteredAccessories,
    filteredClothes,
  } = useContext(StateContext);

  // console.log(shoes);

  if (show === "shoes")
    return (
      <>
        <Filters />
        <div className="card-container">
          {filteredShoes.map((shoe) => {
            return (
              <ProductCard
                key={shoe._id}
                name={shoe.name}
                description={shoe.description}
                price={shoe.price}
                gender={shoe.gender}
                image={shoe.image}
                path={`/details/shoe/${shoe._id}`}
              />
            );
          })}
        </div>
      </>
    );

  if (show === "clothes")
    return (
      <>
        <FiltersClothes />
        <div className="card-container">
          {filteredClothes.map((item) => {
            return (
              <ProductCard
                key={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                path={`/details/item/${item._id}`}
              />
            );
          })}
        </div>
      </>
    );

  if (show === "accessories")
    return (
      <>
        <AccessoriesFilters />
        <div className="card-container">
          {filteredAccessories.map((accessory) => {
            return (
              <ProductCard
                key={accessory._id}
                name={accessory.name}
                description={accessory.description}
                price={accessory.price}
                image={accessory.image}
                path={`/details/accessory/${accessory._id}`}
              />
            );
          })}
        </div>
      </>
    );

  return (
    <>
      <div className="card-container">
        {filteredClothes.map((item) => {
          return (
            <ProductCard
              key={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              path={`/details/item/${item._id}`}
            />
          );
        })}
        {filteredShoes.map((shoe) => {
          return (
            <ProductCard
              key={shoe._id}
              name={shoe.name}
              description={shoe.description}
              price={shoe.price}
              image={shoe.image}
              path={`/details/shoe/${shoe._id}`}
            />
          );
        })}
        {filteredAccessories.map((accessory) => {
          return (
            <ProductCard
              key={accessory._id}
              name={accessory.name}
              description={accessory.description}
              price={accessory.price}
              image={accessory.image}
              path={`/details/accessory/${accessory._id}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
