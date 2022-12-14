import React from 'react';
import {InputTextComponent, ButtonComponent} from 'my-lib-ui';
import style from "./style.js";
const ConnectionComponent = (props) => {

    return (
        <div style={style.spaceAround}>
            <div style={style.container}>
                <div style={style.goBack}>
                    <p onClick={()=>props.goBack()}> <span>←</span> retour</p>
                </div>
                <div style={style.form}>
                    <h2 style={style.connexion}>CONNEXION</h2>
                    <div style={style.id}>
                        <InputTextComponent fieldName="identifiant" />
                    </div>
                    <div style={style.pw}>
                        <InputTextComponent fieldName="mot de passe" />
                    </div>
                    <div style={style.btn}>
                        <ButtonComponent text="Connexion" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectionComponent;