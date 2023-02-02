import React, { useState } from 'react';
import style from "./style.js";
import ButtonComponent from "./Button/ButtonComponent"
const TablesComponent = (props) => {
    const tableContent = props.tableSelector === 'cars' ? 'cars' : 'users'
    let head
    if (tableContent === 'cars') {
        head =  
        <tr style={{height: "50px"}}>
            <th style={style.brdrbttm}>Marque</th>
            <th style={style.brdrbttm}>Modèle</th>
            <th style={style.brdrbttm}>Actions</th>
        </tr>
    }else{
        head =  
        <tr style={{height: "50px"}}>
            <th style={style.brdrbttm}>validate</th>
            <th style={style.brdrbttm}>Nom/Prénom</th>
            <th style={style.brdrbttm}>Coordonées</th>
            <th style={style.brdrbttm}>Nationalités</th>
            <th style={style.brdrbttm}>Actions</th>
        </tr>
    }

    let datas
    if (tableContent === 'cars') {
        datas = [
            {
                brand: "BMW",
                model: "I8",
            },
            {
                brand: "Ferrari",
                model: "458 SPECIALE APERTA",
            }
        ]
    }else{
        datas = [
            {
                validate: "waiting",
                firstName: "Dumont-Nachos",
                lastName: "Bruce",
                mail: "email@emailunpeulongpourtesterletableau.com",
                phone: "0707070707",
                nationality: "Français",
            },
            {
                validate: "validated",
                firstName: "Coup-Déta",
                lastName: "Hervé",
                mail: "lebgdu67@laposte.net",
                phone: "0606060606",
                nationality: "Français",
            }
        ]
    }
    return(
        <div style={{padding: "10px"}}>
            <table style={style.tableStyle}>
                <thead>
                    {head}
                </thead>
                <tbody>
                    {
                        tableContent == 'cars' ?
                            datas.map((data, i)=>{
                                return(
                                    <tr key={i} style={{height: "50px"}}>
                                        <td style={style.brdrbttm}>{data.brand}</td>
                                        <td style={style.brdrbttm}>{data.model}</td>
                                        <td style={style.brdrbttm}><ButtonComponent action={'carUpdate'} dark={true} text="Modifier"/></td>
                                    </tr>
                                )
                            })
                        :
                            datas.map((data, i)=>{
                                return(
                                    <tr key={i} style={{height: "50px"}}>
                                        <td style={style.brdrbttm}> <b>{data.validate == "waiting" ? "⚠️ En attente": "✅ Validé"}</b></td>
                                        <td style={style.brdrbttm}>{data.firstName} {data.lastName}</td>
                                        <td style={style.brdrbttm}>{data.mail} <br /> {data.phone}</td>
                                        <td style={style.brdrbttm}>{data.nationality}</td>
                                        <td style={style.brdrbttm}>{data.validate == 'waiting' ? <ButtonComponent action={'validateUser'} dark={false} text="Vérifier"/> : <ButtonComponent action={'userUpdate'} dark={true} text="Editer"/>}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablesComponent;