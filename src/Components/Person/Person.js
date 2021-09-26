import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Person.css'
const Person = (props) => {
    // console.log(props);
    const{img, name, age, designation, hireCost} = props.person;
    const cartDj = <FontAwesomeIcon icon={faShoppingCart} />
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
            <button  
            onClick={() => props.handleAddToCart(props.person)}
            className="btn-cart"
            >{cartDj} Add to Cart
            </button>
           
            </div>
             
        </div>
    );
};

export default Person;