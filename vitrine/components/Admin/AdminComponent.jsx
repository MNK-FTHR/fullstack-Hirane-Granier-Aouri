import React from 'react';
import style from "./style.js";
const AdminComponent = (props) => {

    return(
        <div style={style.container}>
            <div style={style.nav}>
                <div style={style.nav1}>
                    <p></p>
                </div>
                <div style={style.nav2}>

                </div>
            </div>
            <div style={style.table}></div>
        </div>
    )
}

export default AdminComponent;