import React from "react";
import icon404 from "../../assets/404.png";

import { 
    Error, 
    Status 
} 
from "./styles";

const ErrorPage = () => {
    return (
        <Error>
            <div>
                <h1>Página não encontrada!</h1>

                <Status>
                    <img src={icon404} alt="404"/>
                </Status>

            </div>
        </Error>
    )
}

export { ErrorPage };