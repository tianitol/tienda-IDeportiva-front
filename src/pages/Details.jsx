import { useContext,useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import StateContext from '../store/StateContext';

const Details = () =>{
    let [shoe, setShoe] = useState({})
    let params = useParams();
    let {shoes} = useContext(StateContext);

    useEffect(()=>{
        let shoe = shoes.find((shoe)=>shoe._id == params.id);
        setShoe(shoe);
    },[shoes])

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card dark-card">
                        <img src={shoe?.image} className="card-img-top" alt="Imagen del card" />
                        <div className="card-body">
                            <h5 className="card-title">{shoe?.name} </h5>
                            <p className="col">{shoe?.description} </p>
                            <p className="col">Gender: {shoe?.gender} </p>
                            <div className="card-text">
                            <p className="col">Size: {shoe?.size} </p>
                                <p className="col">Branch: {shoe?.branch} </p>
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
