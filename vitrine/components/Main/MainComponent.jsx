import React, { useState } from "react"
import style from "./style.js"
import FormComponent from "./Form/FormComponent";
import AfterSubscription from "./AfterSubscription/AfterSubscription.jsx";
const MainComponent = () => {
    const [form, setForm] = useState({from: "", data: {}})
    const handleSubmit = (event, data) => {
        console.log(data);
        setForm({from: data.from, data: data.data})
        console.log(form);
      };

      fetch('https://jsonplaceholder.typicode.com/posts/1', {
          mode: 'cors',
          headers: {
              'Access-Control-Allow-Origin':'*'
          }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));

      fetch('http://localhost:8000/api/hello', {
          mode: 'cors',
          headers: {
              'Access-Control-Allow-Origin':'*'
          }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
    return (
        <div style={style.container}>
            <div style={style.bgcar}>
                <div style={style.desc}>
                    <p style={style.description}>
                        <span style={{color: "#C00000"}}>▷</span> Depuis 2008, RIDE,
                         agence de location de voitures 
                         de luxe propose ses services partout en France <br />
                         (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...). <br /> 
                         Notre expérience est à votre service pour répondre à toutes vos demandes
                    </p>
                    <hr width="95%" color="#C00000" size="1" />
                </div>
            </div>
            <div style={style.main}>
                <div style={style.mainForm}>
                    <h2 style={{color: "#C00000", fontWeight: "500"}}>INSCRIPTION</h2>
                    {form.from == "" ? (
                        <>
                            <p>Je suis :</p>
                            <FormComponent handleSubmit={handleSubmit} />
                        </>
                    ) : (
                        <AfterSubscription />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;