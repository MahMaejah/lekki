import React from "react";
import { Link } from "react-router-dom";

const Property = props => {
    return (
        <div className="card">
            <img className="card-img-top" style={{height: 300}} src={props.propertyImage} alt={props.propertyDescription} />
            
            <div className="card-body">
                <h4 className="card-title">{props.propertyDescription}</h4>
                <Link to={props.viewProperty} className="btn btn-primary" style={{margin: "12px 7px 12px 0"}}>View Property</Link>
                <Link to={props.editProperty} className="btn btn-warning" style={{margin: "12px 7px 12px 0"}}>Edit Property</Link>
            </div>
        </div>
    )
}

export default Property;