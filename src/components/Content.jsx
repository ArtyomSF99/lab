import React from "react";
import Counter from "./Counter";

const Content = () => {
    return(
        <div className="main_content">
        <div className="img1">
        <img  src="https://i.pinimg.com/736x/c4/f4/5d/c4f45de98020aeebf9f812c176fab2d7.jpg" alt="Avatar" className="img1"/>
        </div>
        {/* <div>
            <Counter/>
        </div> */}
        <div className="center_info">
        <div className="text_block">
        <p>
        Չնայած, որ Հայաստանը չափերով փոքր երկիր է, սակայն մեքենաները շատ են: Այդ պատճառով կա ավտոկայանատեղերի խնդիր,բայց ոչ բոլոր քաղաքներում: Հիմնականում այդ խնդիրը առաջանում է Երևանում:
Այդ խնդրի լուծման համար մենք ունենք ծրագիր, որը կլուծի այդ խնդիրները:
        </p>
        <p>
        Մենք ներկայացնում ենք ավտոմատացված համակարգով ավտոկայանատեղեր, որոնք չեն զբաղեցնում շատ տեղ,ապահով են և մեր երկրում չկա նման կայանատեղեր:
        </p>
       


        </div>
        <a href="registration" className="main_button">Զբաղեցնել տեղ</a>
        <div className="text_block1">
            <p>
            Քանի որ քաղաքում մեքենաները շատ են, այդ ամենի հետ մեկտեղ հիշենք, որ նաև շատանում են էլեկտրական մեքենաները և մենք դրա լուծումն էլ ենք գտել:

Կայանատեղերի մեջ ամեն հարկում տեղադրում ենք էլեկտրական մեքենաների լիցքավոիչներ:
            </p>
            <p>
            Այն նույնպես կաշխատի հավելվածով, սարքը կմիացվի մեքենային կսկանավորվի QR-ով ,կվճարվի գումարը և կսկսվի լիցքավորվել մեքենայի մարտկոցը, իսկ վերջում ավտոմատ կերպով կանջատվի

            </p>
        </div>
        </div>
        
        <div className="img_content">
        <img  src="https://i.pinimg.com/originals/42/d6/21/42d62114e4effb6804b8cf54c91424ae.gif"  alt="Avatar"  className="img2"/>
        </div>
            
        </div>
    )
}

export default Content