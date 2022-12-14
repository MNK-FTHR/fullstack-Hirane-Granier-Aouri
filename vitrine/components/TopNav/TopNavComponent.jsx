import React from "react"
import {ButtonComponent} from "my-lib-ui";
import style from "./style.js"
const TopNavComponent = (props) => {
    const handleSubmit = (event, data) =>{
        data.from = 'conAdmin';
        data.data = {};
        props.handleSubmit(event, data)
    }
    return (
        <div style={style.container}>
            <div style={style.gridObjects.logoImage}>
                <img src={"/Logo.svg"} />
            </div>
            <div style={style.gridObjects.title}>
                <h2 style={style.title}>RIDE</h2>
            </div>
            <div style={style.gridObjects.connexion}>
                <div style={style.connexion}>
                    <ButtonComponent color="danger" text="Connexion admin" handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default TopNavComponent;