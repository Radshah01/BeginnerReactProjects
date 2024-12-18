import proptypes from 'prop-types';
import React, {useState} from 'react'



function Container({title, children}){

    return(
        <div className="container">
            <h2 className="section-title">
                {title}
            </h2>
           {children}
        </div>
    );
}

export default Container