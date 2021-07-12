import * as React from 'react';
require("./index.css");

export const Logo = () => {   
   
    return(
        <div class = "logo">
            <div class="logo__img">
                <img src="logo.png" alt=""></img>
            </div>
            <div class="divisor"></div>
            <div class = "logo__text">
                Роботизированная разведка нефтяных месторождений
            </div>
        </div>
    )
}