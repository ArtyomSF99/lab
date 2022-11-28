import React from "react";

const Nav = () => {

    return(
        <div className="navbar">
        <a href="/">
        <button className="border-button">
                Գլխավոր
            </button>
        </a>
            
            <button className="border-button">
                Մեր մասին
            </button>
            <button className="border-button">
                Սակագներ
            </button>
            <button className="border-button">
                Գրանցվել
            </button>
            <button className="border-button">
                Մուտք
            </button>
        </div>
    )
}

export default Nav;