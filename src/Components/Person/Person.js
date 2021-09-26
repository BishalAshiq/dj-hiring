import React from 'react';
import './Person.css'
const Person = (props) => {
    // console.log(props);
    const{img, name, age, designation, hireCost} = props.person;
    return (
        <div className="person">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>{designation}</p>
            <h5>Hire-Cost: ${hireCost}</h5>
            <button className="btn-cart" 
            onClick={() => props.handleAddToCart(props.person)}>Add to Cart</button>
            </div>
             
        </div>
    );
};

export default Person;