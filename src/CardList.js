import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    return (
        <div className='flex flex-wrap justify-around'>
            {
                robots.map((item, index) => {
                    return (
                        <Card 
                            key={index}
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;