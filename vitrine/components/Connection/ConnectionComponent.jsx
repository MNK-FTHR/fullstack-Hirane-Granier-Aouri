import React, { useState } from 'react';
import {InputTextComponent, ButtonComponent} from 'my-lib-ui';
import style from "./style.js";
const ConnectionComponent = (props) => {
    const [hover, setHover] = useState(false);
    return (
        <div style={style.spaceAround}>
            <div style={style.whiteSpace}></div>
            <div style={style.container}>
                <div style={style.goBack}>
                    <p 
                        onMouseEnter={()=>{
                            setHover(true);
                        }}
                        onMouseLeave={()=>{
                            setHover(false);
                        }}
                        style={{cursor: "pointer", ...(hover ? {textDecoration: "underline"} : null)}}
                        onClick={()=>props.goBack()}
                    ><span>←</span> retour</p>
                </div>
                <div style={style.form}>
                    <h2 style={style.connexion}>CONNEXION</h2>
                    <div style={style.id}>
                        <InputTextComponent fieldName="identifiant" />
                    </div>
                    <div style={style.pw}>
                        <InputTextComponent type="password" fieldName="mot de passe" />
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