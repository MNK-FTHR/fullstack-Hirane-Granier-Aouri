import React from 'react';
import style from './style.js';
const AfterSubscription = () => {
  return (
    <div style={style.container}>
      <div style={style.text}>
        <p>Votre demande d'inscription a bien été prise en compte. <br />
        Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l'application</p>
      </div>
      <div style={style.links}>
        <div style={style.first}>          
          <a href="#" >
            <img src="./appStore.png" alt="appStore" />
          </a>
        </div>
        <div style={style.second}>
          <a href="#" >
            <img src="./googlePlay.png" alt="googlePlay" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AfterSubscription;