import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ViewProperty = () => {
    const [id] = useSearchParams();
    const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property/" + id.get("property_id");

    const [property, setProperty] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await (await fetch(url)).json();
                setProperty(data.data);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="jumbotron" style={{marginBottom: 0}}>
            <h2>{property.description}<i className="badge bg-dark rounded-pill">{property.address}</i></h2>
            <hr />
         
            <div className="row">
                <div className="col">
                    <h5>Type: <i className="badge bg-primary rounded-pill">{property.type}</i></h5>
                </div>
                <div className="col">
                    <h5>Bathroom: <i className="badge bg-primary rounded-pill">{property.bathroom}</i></h5>
                </div>
                <div className="col">
                    <h5>Bedroom: <i className="badge bg-primary rounded-pill">{property.bedroom}</i></h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Kitchen: <i className="badge bg-primary rounded-pill">{property.kitchen}</i></h5>
                </div>
                <div className="col">
                    <h5>Owner:<i className="badge bg-primary rounded-pill">{property.propertyOwner}</i></h5>
                </div>
                <div className="col">
                    <h5>Sitting Room: <i className="badge bg-primary rounded-pill">{property.sittingRoom}</i></h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Toilet: <i className="badge bg-primary rounded-pill">{property.toilet}</i></h5>
                </div>
                <div className="col">
                    <h5>Valid from: <i className="badge bg-primary rounded-pill">{property.validFrom}</i></h5>
                </div>
                <div className="col">
                    <h5>Valid to: <i className="badge bg-primary rounded-pill">{property.validTo}</i></h5>
                </div>
            </div>

            {/*   PROPERTY IMAGES   */}
            <div className="propert-images">
                    {property.images ? 
                        (
                            <>
                                <span className="badge bg-primary">Property images</span><br />
                                <div className="row">
                                    {property.images.map((image, index) => {
                                        return (
                                            <div className="col-md-4" key={index}>
                                                <div className="thumbnail">
                                                    <a href={image.path} target="_blank">
                                                        <img src={image.path} alt="Property image" style={{width: 320, height: 300}} />                                                
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        ) 
                        :   
                        (
                            <>
                                <h5><i>No Images</i></h5>
                            </>
                        )
                    }                                                                                                                                                                                
            </div>
        </div>
    )
}

export default ViewProperty;