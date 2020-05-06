import React from 'react';

const card = ({id, name, email}) => {
    return (
        <div className="bg-near-white orange tc dib br3 pa3 ma2 shadow-4 grow pointer">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"></img>
            <div>
                <h2>{name}</h2>
                 <p>{email}</p>
            </div>
        </div>
    );
}

export default card;