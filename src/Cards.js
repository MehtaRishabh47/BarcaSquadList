import React from 'react';
import './robots';

const Cards = ({ name, position, id}) => {
    return(
        <div className='tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
        <div>
            <h2>{name}</h2>
            <p>{position}</p>
        </div>
        </div>
    );
}
export default Cards;