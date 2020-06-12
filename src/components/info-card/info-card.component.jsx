import React from 'react';

import './info-card.styles.scss';

function InfoCard ({link,visibility,changevisibility}) {



    return(
        <div className={`card-info ${visibility?"card-visible":"card-invisible"}`}>
            <div className="card-content">
                <div onClick={changevisibility}>x</div>
                <form action={link} method="POST" className="card-form">
                    <input type="text" placeholder={link}></input>
                    <input type="text" placeholder="ABOUT"></input>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default InfoCard;