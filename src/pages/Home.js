import React, { useState, useEffect } from "react";
import Property from "../components/Property";
import house from "../assets/house.svg";

const Home = () => {
    const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property";

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await (await fetch(url)).json();                
                setProperties(data.data);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="card-columns" id="properties" style={{margin: 50}}>
            {properties.map((property) => 
                <Property 
                    key={property._id}
                    propertyImage={property.images[0] ? property.images[property.images.length - 1].path : house} 
                    propertyDescription={property.description} 
                    viewProperty={"view?property_id=" + property._id}
                    editProperty={"edit?property_id=" + property._id}
                />
             )}
        </div>
    );
}

export default Home;