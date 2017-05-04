import React from 'react';

const Section = (props) => {
    return(
        <div className="section" style={{position: 'relative'}}>
            <div className="title-wrap">
                <h2>{props.title}</h2>
            </div>
            {props.children}
        </div>
    );
};

export { Section };
