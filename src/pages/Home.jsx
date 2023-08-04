import ProductCard from '../components/ProductCard';
import {useContext} from 'react';
import StateContext from '../store/StateContext';
import Filters from '../components/Filters';
import FiltersClothes from '../components/FiltersClothes';

const Home = ({show}) => {

const {shoes,filteredShoes, accessories, clothes,filteredClothes } = useContext(StateContext)

// console.log(shoes);

if (show === 'shoes') return (
  <>
  <Filters/>
  <div className='card-container'>
  {
    filteredShoes.map((shoe) => {
      return (
        
        <ProductCard
          key={shoe._id}
          name={shoe.name}
          description={shoe.description}
          gender = {shoe.gender}
          image={shoe.image}
          // path={`/details/${event._id}`} />
          />
      )
    })
  }
  </div>
  </>
)


if (show ==='clothes') return (
  <>
  <FiltersClothes/>
  <div className='card-container'>
  {
    filteredClothes.map((item) => {
      return (
        <ProductCard
          key={item._id}
          name={item.name}
          description={item.description}
          image={item.image}
          // path={`/details/${event._id}`} />
          />
      )
    })
  }
  </div>
  </>

)

if (show ==='accessories') return (
  <div className='card-container'>

  {
    accessories.map((accessory) => {
      return (
        <ProductCard
          key={accessory._id}
          name={accessory.name}
          description={accessory.description}
          image={accessory.image}
          // path={`/details/${event._id}`} />
          />
      )
    })
  }
  </div>
)

  return (
    <>
   
    <div className='card-container'>
    {
        clothes.map((item) => {
          return (
            <ProductCard
              key={item._id}
              name={item.name}
              description={item.description}
              image={item.image}
              // path={`/details/${event._id}`} />
              />
          )
        })
      }
      {
        shoes.map((shoe) => {
          return (
            <ProductCard
              key={shoe._id}
              name={shoe.name}
              description={shoe.description}
              image={shoe.image}
              // path={`/details/${event._id}`} />
              />
          )
        })
      }
      {
        accessories.map((accessory) => {
          return (
            <ProductCard
              key={accessory._id}
              name={accessory.name}
              description={accessory.description}
              image={accessory.image}
              // path={`/details/${event._id}`} />
              />
          )
        })
      }
    </div>
    </>
  )
};

export default Home;
