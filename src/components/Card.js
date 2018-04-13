import React from 'react';

const Card = ({name, email, id}) =>{ //here can go props, or they can be destructured like it can be seen, but if props is passed the variable must be called with props.variable
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/robo${ id }?160x160`} alt="robot"/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;