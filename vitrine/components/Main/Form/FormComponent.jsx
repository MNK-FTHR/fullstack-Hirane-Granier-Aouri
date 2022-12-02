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
                <InputTextComponent />
            </div>
            <div style= {style.firstName}>
                <InputTextComponent />
            </div>
            <div style= {style.eMail}>
                <InputTextComponent />
            </div>
            <div style= {style.phone}>
                <InputTextComponent />
            </div>
            <div style= {style.nationality}>
                <SelectComponent />
            </div>
            <div style= {style.driversLicense}>
                <CheckBoxComponent />
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