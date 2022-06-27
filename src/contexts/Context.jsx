import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

function AuthContext({children}){
    const [user, setUser] = useState(null || []);

    function loadUser(user){
        setUser(user);
        localStorage.setItem("@hero", JSON.stringify({name:user[1], id:user[0]}));

    }
    return(
        <Context.Provider value={{ user:!!!user, user,loadUser }}>
            { children }
        </Context.Provider>
    )
}


export { AuthContext };