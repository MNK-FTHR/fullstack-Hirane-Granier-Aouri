import React from 'react';
import style from "./style.js"

const FooterComponent = () => {
    return (
        <footer>
            <div style={style.container}>
            <div style={style.gridObjects.firstLink}>
                <a href="#" style={style.link}>Contact</a> <br />
            </div>
            <div style={style.gridObjects.secondLink}>
                <a href="#" style={style.link}>Conditions générales pdf</a>
            </div>
            <div style={style.gridObjects.main}>
                <p style={style.mainText}>RIDE 2022 - tout droits réservés</p>
            </div>
            </div>
        </footer>
    );
};

export default FooterComponent;