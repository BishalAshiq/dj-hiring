import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Hire.css'
const Hire = () => {
    const[persons, setPersons] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect( ()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    } , [])
    
    const handleAddToCart= (person) =>{
          const newCart= [...cart, person];
          setCart(newCart);
    }

    return (
        <div className="hire-container">
            <div className="persons-container">
              
               {
                   persons.map(person =><Person 
                    key={person.key}
                    person={person}
                    handleAddToCart={handleAddToCart}
                    >
                    </Person>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Hire;