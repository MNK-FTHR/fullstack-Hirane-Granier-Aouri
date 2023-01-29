import React from 'react';
import style from "./style.js";
const AdminComponent = (props) => {

    return(
        <div style={style.container}>
            <h1 style={style.title}>GESTION BACK OFFICE</h1>
            <div style={style.nav}>
                <div style={style.nav1}>
                    <p>tab1</p>
                </div>
                <div style={style.nav2}>
                    <p>tab2</p>
                </div>
            </div>
            <div style={style.table}>
                <div>table header</div>
                <div>table body</div>
            </div>
        </div>
    )
}

export default AdminComponent;