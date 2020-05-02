import React from 'react';
import Cards from './Cards';
import {robots} from './robots';

const CardArray = ({robots}) =>{
    return(
        <div>
            {
                robots.map((user,i) => {
                    return(
                        <Cards
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        position={robots[i].position}
                        />
                    )
                })
            }    
        </div>
        
        )
}


export default CardArray;