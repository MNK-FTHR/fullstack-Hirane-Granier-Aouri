import React from "react"
import style from "./style.js"
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckBoxComponent, ButtonComponent} from "my-lib-ui";

const FormComponent = () => {
    return (
        <div style={style.container}>
            <div style={style.radioArea}>
                <div style={style.company}>
                    <RadioButtonComponent />
                </div>
                <div style={style.private}>
                    <RadioButtonComponent />
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
            </div>
            <div style= {style.subscribe}>
                <ButtonComponent />
            </div>
        </div>
    );
};

export default FormComponent;