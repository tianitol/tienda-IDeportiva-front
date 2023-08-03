import ProductCard from '../components/ProductCard';
import {useContext} from 'react';
import StateContext from '../store/StateContext';

const Home = () => {

const {shoes, accessories, clothes} = useContext(StateContext)

// console.log(shoes);

  return (
    <>
    <div className='card-container'>
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
    </div>
    </>
  )
};

export default Home;
