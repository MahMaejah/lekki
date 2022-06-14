import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import { useSearchParams } from "react-router-dom";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const EditPropertyFormContainer = () => {
    const [id] = useSearchParams();    
    const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property/" + id.get("property_id");

    const [bedroom, setBedroom] = useState([]);
    const [sittingRoom, setSittingRoom] = useState([]);
    const [kitchen, setKitchen] = useState([]);
    const [bathroom, setBathroom] = useState([]);
    const [toilet, setToilet] = useState([]);
    const [description, setDescription] = useState([]);
    const [validTo, setValidTo] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        var payload = {
            "bedroom": bedroom,
            "sittingRoom": sittingRoom,
            "kitchen": kitchen,
            "bathroom": bathroom,
            "toilet": toilet,
            "description": description,
            "validTo": validTo
        };

        var requestOptions = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            redirect: 'follow'
        };

        fetch("https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property/" + id.get("property_id"), requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                alert("Submitted successfully");
            })
            .catch(error => console.log('error', error));
    }

    const handleInputChange = e => {
        let name = e.target.name;
        let value = e.target.value;

        switch (name) {
            case "bedroom":
                setBedroom(value);
                break;
            case "sittingRoom":
                setSittingRoom(value);
                break;
            case "kitchen":
                setKitchen(value);
                break;
            case "bathroom":
                setBathroom(value);
                break;
            case "toilet":
                setToilet(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "validTo":
                setValidTo(value);
                break;
            }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await (await fetch(url)).json();
                setBedroom(data.data.bedroom);
                setSittingRoom(data.data.sittingRoom);
                setKitchen(data.data.kitchen);
                setBathroom(data.data.bathroom);
                setToilet(data.data.toilet);
                setDescription(data.data.description);
                setValidTo(data.data.validTo);
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, []);

    return (
        <form className="container">
            <Input 
                name="bedroom"
                title="Bedrooms"
                inputType="number"
                value={bedroom}
                handleChange={handleInputChange}
                placeholder="Number of Bedrooms"
            />

            <Input 
                name="sittingRoom"
                title="Sitting rooms"
                inputType="number"
                value={sittingRoom}
                handleChange={handleInputChange}
                placeholder="Number of Sitting rooms"
            />

            <Input 
                name="kitchen"
                title="Kitchens"
                inputType="number"
                value={kitchen}
                handleChange={handleInputChange}
                placeholder="Number of Kitchens"
            />

            <Input 
                name="bathroom"
                title="Bathrooms"
                inputType="number"
                value={bathroom}
                handleChange={handleInputChange}
                placeholder="Number of Bathrooms"
            />

            <Input 
                name="toilet"
                title="Toilets"
                inputType="number"
                value={toilet}
                handleChange={handleInputChange}
                placeholder="Number of Toilets"
            />

            <TextArea 
                name="description"
                rows={5}
                value={description}
                handleChange={handleInputChange}
                placeholder="Property Description"
            />

            <Input
                name="validTo"
                title="Valid To"
                inputType="date"
                value={validTo}
                handleChange={handleInputChange}
                placeholder="Valid To"
            />

            <Button 
                type="primary"
                title="Submit"
                action={handleSubmit}
            />
        </form>
    );
}

export default EditPropertyFormContainer;