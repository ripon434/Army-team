import React from 'react';
import './Army.css'

const Army = (props) => {
    const { army } = props;
    // let totalQuantity = 0;
    let total = 0;
    for (const team of army) {
        total = total + team.salary;
    }
   
    // total = total + army ;
    // totalQuantity = totalQuantity + army;
    return (
        <div>
            <h3>Team</h3>
            <h4>Army :{props.army.length}</h4>
            <br />
            <h5>Salary:${ total}</h5>
           
        </div>
    );
};

export default Army;