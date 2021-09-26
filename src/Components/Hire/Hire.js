import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Hire.css'
const Hire = () => {
    const[persons, setPersons] = useState([])
    useEffect( ()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    } , [])
    
    const handleAddToCart= (person) =>{
          console.log('clicked');
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
                <h2>Hired List</h2>
                <h4>Number of DJ: </h4>
            </div>
        </div>
    );
};

export default Hire;