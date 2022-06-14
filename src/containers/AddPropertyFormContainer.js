import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import TextArea from "../components/TextArea";

class AddPropertyFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "",
            type: "",
            typeOptions: ["House", "Flat"],
            bedroom: "",
            sittingRoom: "",
            kitchen: "",
            bathroom: "",
            toilet: "",
            propertyOwner: "",
            description: "",
            validFrom: "",
            validTo: "",
            image: null
        }
    }

    handleInputChange = e => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({[name]: value});
    }

    handleImageUpload = e => {
        this.displayImage(e.target.files[0]);
    }

    displayImage = image => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
        });
        console.log("valid from: ", this.state.validFrom);
        reader.readAsDataURL(image);
        this.setState({image: image});
    }

    uploadImage = (e) => {
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("file", this.state.image, this.state.image.name);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://sfc-lekki-property.herokuapp.com/api/v1/lekki/upload", requestOptions)
        .then(response => response.json())
        .then(result => this.addProperty(result.data))
        .catch(error => console.log('error', error));
    }

    addProperty = uploadedImage => {
        var payload = {
            "address": this.state.address,
            "type": this.state.type,
            "bedroom": this.state.bedroom,
            "sittingRoom": this.state.sittingRoom,
            "kitchen": this.state.kitchen,
            "bathroom": this.state.bathroom,
            "toilet": this.state.toilet,
            "propertyOwner": this.state.propertyOwner,
            "description": this.state.description,
            "validFrom": this.state.validFrom,
            "validTo": this.state.validTo,
            "images": [uploadedImage]
        };

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            redirect: 'follow'
        };

        fetch("https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            alert("Propery added successfully");
        })
        .catch(error => console.log('error', error));
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div style={{width: "400px", height: "225px", border: "1px solid black", backgroundPosition: "center", backgroundSize: "cover"}} id="display-image">

                </div>

                <Input 
                    title="Upload image"
                    inputType="file"
                    name="someimg"
                    accept="image/jpeg, image/png, image/jpg"
                    handleChange={this.handleImageUpload}
                />

                <Input 
                    name="propertyOwner"
                    title="Property Owner"
                    inputType="text"
                    value={this.state.propertyOwner}
                    handleChange={this.handleInputChange}
                    placeholder="Property owner"
                />                

                <Input 
                    name="address"
                    title="Address"
                    inputType="text"
                    value={this.state.address}
                    handleChange={this.handleInputChange}
                    placeholder="Address"
                />
                
                <TextArea 
                    name="description"
                    rows={5}
                    value={this.state.description}
                    handleChange={this.handleInputChange}
                    placeholder="Property Description"
                />

                <Input
                    name="validFrom"
                    title="Valid From"
                    inputType="date"
                    value={this.state.validFrom}
                    handleChange={this.handleInputChange}
                    placeholder="Valid From"
                />

                <Input
                    name="validTo"
                    title="Valid To"
                    inputType="date"
                    value={this.state.validTo}
                    handleChange={this.handleInputChange}
                    placeholder="Valid To"
                />

                <Select 
                    name="type"
                    title="Property Type"
                    value={this.state.type}
                    handleChange={this.handleInputChange}
                    placeholder="Type"
                    options={this.state.typeOptions}
                />

                <Input 
                    name="bedroom"
                    title="Bedrooms"
                    inputType="number"
                    value={this.state.bedroom}
                    handleChange={this.handleInputChange}
                    placeholder="Number of Bedrooms"
                />

                <Input 
                    name="sittingRoom"
                    title="Sitting rooms"
                    inputType="number"
                    value={this.state.sittingRoom}
                    handleChange={this.handleInputChange}
                    placeholder="Number of Sitting rooms"
                />

                <Input 
                    name="kitchen"
                    title="Kitchens"
                    inputType="number"
                    value={this.state.kitchen}
                    handleChange={this.handleInputChange}
                    placeholder="Number of Kitchens"
                />

                <Input 
                    name="bathroom"
                    title="Bathrooms"
                    inputType="number"
                    value={this.state.bathroom}
                    handleChange={this.handleInputChange}
                    placeholder="Number of Bathrooms"
                />

                <Input 
                    name="toilet"
                    title="Toilets"
                    inputType="number"
                    value={this.state.toilet}
                    handleChange={this.handleInputChange}
                    placeholder="Number of Toilets"
                />

                <Button 
                    type="primary"
                    title="Submit"
                    action={this.uploadImage}
                />
            </form>
        )
    }
}

export default AddPropertyFormContainer;