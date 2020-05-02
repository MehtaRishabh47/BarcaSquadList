import React from 'react';

const Searchbar =({searchfield, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
                className='pa2 ba b--green bg-lightest-blue' 
                name='searchbar' 
                type='text' 
                placeholder='Search Players'
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbar;