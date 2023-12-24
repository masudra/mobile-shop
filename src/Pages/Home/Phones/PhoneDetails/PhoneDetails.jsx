import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const PhoneDetails = () => {
    const phonesDatas = useLoaderData()
    console.log(phonesDatas);
    const { phone_name, photos, price,color,processor,brand_name} = phonesDatas

    return (
        <div>
            <div className=" grid grid-cols-2">
                <div className="w-[400px]">
                    <Carousel>
                        <div>
                            <img src={photos[0]} />
                        </div>
                        <div>
                            <img src={photos[1]} />
                        </div>
                        <div>
                            <img src={photos[2]} />
                        </div>
                    </Carousel>
                </div>
                <div className="mt-10">
                    <h1>{brand_name}</h1>
                    <h1>{phone_name}</h1>
                    <h1>Price:  ${price}</h1>
                    <h1>Status: In Stock</h1>
                    {/* <div >color{color.map(colors => <h1>{colors}</h1>)}</div> */}
                    <h1>processor: {processor}</h1>
                </div>
            </div>

        </div>
    );
};

export default PhoneDetails;