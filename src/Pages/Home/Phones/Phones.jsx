import { useEffect, useState } from "react";
import PhonesCard from "./PhonesCard";

const Phones = () => {
    const [phonesData,setPhoneData]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/phones')
    .then(res => res.json()
    .then(data => setPhoneData(data)))

},[])

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
            {
                phonesData.map(phonesDatas =>
                     <PhonesCard
                      key={phonesDatas._id}
                      phonesDatas={phonesDatas}
                      >

                     </PhonesCard>)
            }

            
        </div>
    );
};

export default Phones;