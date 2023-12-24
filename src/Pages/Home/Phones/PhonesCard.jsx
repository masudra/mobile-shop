
const PhonesCard = ({ phonesDatas }) => {
    console.log(phonesDatas);
    const { phone_name, brand_name, photos, price } = phonesDatas
    return (
        <div>
            <div >
                <div className="card card-compact lg:w-64 md:w-64 w-44 bg-base-100 shadow-xl">
                    <figure><img src={photos[0]} alt="Shoes" /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">{brand_name}</h2> */}
                        <h2 className="card-title">{phone_name}</h2>
                        <h2 className="card-title text-[rgb(255,157,42)]">${price}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[rgb(255,157,42)] text-white hover:bg-white hover:text-[rgb(255,157,42)] hover:border-[rgb(255,157,42)]">Buy Now</button>
                            <button className="btn bg-white text-[rgb(255,157,42)] 
                             border-[rgb(255,157,42)] hover:bg-[rgb(255,157,42)] hover:text-white">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PhonesCard;