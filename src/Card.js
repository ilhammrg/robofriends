import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-blue tc dib pa3 ma2 shadow-5 br3 grow pointer">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"></img>
            <div>
                <h3>{name}</h3>
                 <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;