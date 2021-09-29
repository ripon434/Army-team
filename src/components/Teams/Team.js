import React, { useEffect, useState } from 'react';
import Army from '../Army/Army';
import ArmyData from '../ArmyData/ArmyData';
import './Team.css'

const Team = () => {
    const [teams, setTeams] = useState([]);
    const [army, setArmy] =useState ([]);
    
    useEffect(() => {
        fetch('./fake.JSON')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, []);

    const handleAddToArmy = (team) => {
        //  console.log('ok',team);
        const newArmy = [...army, team];
         setArmy(newArmy);
        //  console.log(newArmy);
    }

    return (
        <div className="team-container">
            <div className="army-data-container">
                {/* <h4>army data:{teams.length}</h4> */}
                {
                    teams.map(team => <ArmyData
                        
                        team={team}
                        key={team.key}
                         handleAddToArmy={handleAddToArmy}
                    ></ArmyData>)
                }
            </div>
            <div className="army-container">
                
                <Army army={army}></Army>
                
            </div>
        </div>
    );
};

export default Team;









