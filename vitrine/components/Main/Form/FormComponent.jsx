import React from "react"
import style from "./style.js"
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckBoxComponent, ButtonComponent} from "my-lib-ui";
const FormComponent = () => {
    return (
        <div style={style.container}>
            <div style={style.radioArea}>
                <div style={style.company}>
                    <RadioButtonComponent text="une entreprise" />
                </div>
                <div style={style.private}>
                    <RadioButtonComponent text="un particulier" />
                </div>
            </div>
            <div style= {style.lastName}>
                <InputTextComponent fieldName="Nom" />
            </div>
            <div style= {style.firstName}>
                <InputTextComponent fieldName="Prénom"/>
            </div>
            <div style= {style.eMail}>
                <InputTextComponent fieldName="E-mail"/>
            </div>
            <div style= {style.phone}>
                <InputTextComponent fieldName="Numéro de téléphone"/>
            </div>
            <div style= {style.nationality}>
                <SelectComponent nationalities={["Dutch", "English", "Français",]} />
            </div>
            <div style= {style.driversLicense}>
                <CheckBoxComponent text="J’atteste que je possède un permis de conduire valide." />
                {/* <input type="checkbox" id="driversLicense" />
                <label for="driversLicense">J’atteste que je possède un permis de conduire valide.</label> */}
            </div>
            <div style= {style.subscribe}>
                <ButtonComponent color="danger" text="Demander mon inscription" />
            </div>
        </div>
    );
};

export default FormComponent;