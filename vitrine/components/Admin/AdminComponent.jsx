import React, { useState } from 'react';
import style from "./style.js";
import TablesComponent from "./Tables/TablesComponent"
const AdminComponent = (props) => {
    const [whitchTable, setWhitchTable] = useState("users")
    return(
        <div style={style.background}>
            <div style={style.container}>
                <h1 style={style.title}>GESTION BACK OFFICE</h1>
                <div style={style.nav}>
                    <div style={style.nav1}>
                        <p style={whitchTable === "users" ? style.activeTab : style.tab} onClick={()=>{
                            setWhitchTable("users")
                        }}>Liste des utilisateurs inscrits</p>

                    </div>
                    <div style={style.nav2}>
                        <p style={whitchTable === "cars" ? style.activeTab : style.tab} onClick={()=>{
                            setWhitchTable("cars")
                        }}>liste des véhicules</p>
                    </div>
                </div>
                <div style={style.table}>
                    <TablesComponent tableSelector={whitchTable} />
                </div>
            </div>
        </div>
    )
}

export default AdminComponent;