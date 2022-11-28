import React, { useState } from "react";

const Counter = () => {
    const[turn, setTurn] = useState(false)
    const add = () => {
        setTurn(true)
    }
    return(
        <div className="turn">
          {
            turn == false
            ?
          <div className="counter" >
            <div className="turn_input">
            <div >Ներմուծեք Smart-parkink կառույցի Id համարանիշը</div>
            <input className="myInput"></input>
            </div>
            <div className="turn_input">
            <div >Ընտրեք հարթակի համարը</div>
            <select className="myInput">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                
            </select>
            </div>
            <div className="turn_input">
            <div >Ընտրեք ժամանակահատվածը</div>
            <select className="myInput">
                <option>1 ժամ</option>
                <option>2 ժամ</option>
                <option>4ժամ</option>
                <option>8ժամ</option>
                <option>16ժամ</option>
                <option>24ժամ</option>
            </select>
            </div>
            
            
            <button onClick={add} className="main_button">Հերթագրվել</button>
           
           
            
            </div>
            :<div className="counter">
                <div className="text">Շնորհակալություն մեր ծառայություններից օգտվելու համար</div>
            </div>}
            
        </div>
    )
}

export default Counter;