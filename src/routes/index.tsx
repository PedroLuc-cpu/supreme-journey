import {Routes, Route, Navigate } from "react-router-dom";
import { Calculator } from "../page/calc/Calculator";
import SignIn from "../page/sign-in/SignIn";
import { Dashboard } from "../page/dashboard/Dashboard";
import { Formulario } from "../shared/components/Form/Formulario";

export function AppRoute(){
    return(
        <Routes >
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/" element={<Formulario/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to={"/app"}/>}/>        
        </Routes>
)
}