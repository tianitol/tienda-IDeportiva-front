import { useContext} from "react";
import { useParams } from "react-router-dom";
import StateContext from '../store/StateContext';

const Details = () => {
    // let [shoe, setShoe] = useState({})
    let params = useParams();
    let { shoes, accessories, clothes } = useContext(StateContext);

    // useEffect(()=>{
    //     let shoe = shoes.find((shoe)=>shoe._id == params.id);
    //     setShoe(shoe);
    // },[shoes])

    let productDetailed = ''
    const productType = params.product

    switch (productType) {
        case 'item':
            productDetailed = clothes.find((item) => item._id == params.id)
            break;
        case 'shoe':
            productDetailed = shoes.find((shoe) => shoe._id == params.id)
            break;
        case 'accessory':
            productDetailed = accessories.find((accessory) => accessory._id == params.id)
            break;
    }

    // console.log(productDetailed);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card dark-card">
                            <img src={productDetailed.image} className="card-img-top" alt="Imagen del card" />
                            <div className="card-body">
                                <h5 className="card-title">{productDetailed.name} </h5>
                                <p className="col">{productDetailed.description} </p>
                                <p className="col">Price: {productDetailed.price} </p>
                                <div className="card-text">
                                    {productDetailed.gender && <p className="col">Gender: {productDetailed.gender} </p>}
                                    {productDetailed.size && <p className="col">Size: {productDetailed.size} </p>}
                                    {productDetailed.branch && <p className="col">Branch: {productDetailed.branch} </p>}
                                    {productDetailed.category && <p className="col">Category: {productDetailed.category} </p>}
                                    {productDetailed.color && <p className="col">Color: {productDetailed.color} </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Details
