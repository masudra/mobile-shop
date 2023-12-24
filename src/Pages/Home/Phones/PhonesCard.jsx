import { Link } from "react-router-dom";

const PhonesCard = ({ phonesDatas }) => {
    // console.log(phonesDatas);
    const { phone_name, photos, price } = phonesDatas
    return (
        <div>
            <div >
                <div className="card card-compact lg:w-64 md:w-64 w-44 bg-base-100 shadow-xl">
                    <Link to={`/phonedetails/${phonesDatas?._id}`}><figure><img src={photos[0]} alt="Shoes" /></figure>
                    </Link>
                    <div className="card-body">
                        {/* <h2 className="card-title">{brand_name}</h2> */}
                        <Link to={`/phonedetails/${phonesDatas?._id}`}><h2 className="card-title">{phone_name}</h2></Link>
                        <Link to={`/phonedetails/${phonesDatas?._id}`}><h2 className="card-title text-[rgb(255,157,42)]">${price}</h2></Link>
                        <div className="card-actions ">
                            <button className="  btn bg-[rgb(255,157,42)] text-white hover:bg-white hover:text-[rgb(255,157,42)] hover:border-[rgb(255,157,42)]">Buy Now</button>
                            <button className="  btn bg-white text-[rgb(255,157,42)] 
                             border-[rgb(255,157,42)] hover:bg-[rgb(255,157,42)] hover:text-white">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PhonesCard;