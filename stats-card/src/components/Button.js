import React from 'react';
import arrow from  '../img/arrow-right.svg'

function Button() {
    return(

        <button className="btn inline-block">
            <p className="inline-block">View more details</p>
            <img className="btn-img inline-block" src={arrow} alt="arrow"/>
        </button>

    )
}

export default Button