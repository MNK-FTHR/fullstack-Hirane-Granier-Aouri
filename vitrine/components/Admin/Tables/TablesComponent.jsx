import React, { useState } from 'react';
import style from "./style.js";
const TablesComponent = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>The table header</th>
                        <th>The table header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The table body</td>
                        <td>with two columns</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TablesComponent;