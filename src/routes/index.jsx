import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/Error404";
import { Profile } from "../pages/Profile";
import { NewIncident } from "../pages/NewIncitent";
import { Dashboard } from "../pages/Dashboard";




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Dashboard />}></Route>
                <Route exact path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/incidentes/new" element={<NewIncident />}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export { Router };