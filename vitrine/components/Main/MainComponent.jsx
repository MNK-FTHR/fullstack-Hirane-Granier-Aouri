import React from "react"
import style from "./style.js"
const MainComponent = () => {
    return (
        <div style={style.container}>
            <div style={style.bgcar}>
                <div style={style.desc}>
                    <p style={style.description}>
                        <span style={{color: "red"}}>▷</span> Depuis 2008, RIDE,
                         agence de location de voitures 
                         de luxe propose ses services partout en France 
                         (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). <br /> 
                         Notre expérience est à votre service pour répondre à toutes vos demandes
                    </p>
                    <hr width="500px;" color="red" size="1" />
                </div>
            </div>
            <div style={style.main}>
                <div style={style.mainForm}></div>
            </div>
        </div>
    );
};

export default MainComponent;