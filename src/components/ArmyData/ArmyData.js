import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ArmyData.css'

const ArmyData = (props) => {
    // console.log(props);
    const { name, img, salary, position, age, country } = props.team;
    return (    
        <div className="card-body" >
            <div className="car">
                <img  src={img}  alt="..." />
                    <h4>Name:{ name}</h4>
                    <p>Age:{ age}</p>
                    <p>Salary:${ salary}</p>
                <p>Position:{position}</p>
                 <button
                    onClick={() => props.handleAddToArmy(props.team)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

                </div>
    
  </div>


    );
};

export default ArmyData;











