import Head from "next/head";
import React from "react"
import style from "./Footer/style";

const HeadComponent = () => {
    return (
        <div>
            <input type="checkbox" id="entreprise" name="entreprise" value="une entreprise"/>
            <label id={"entreprise"}>une entreprise </label>
            <input type="checkbox" id="particulier" name="entreprise" value="un particulier"/>
            <label id={"particulier"}>un particulier </label>
        </div>


    );
};

export default HeadComponent;