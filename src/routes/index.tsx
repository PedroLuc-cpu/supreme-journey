import {Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../page/sign-in/SignIn";
import { Calculator } from "../page/calc/Calculator";


export function AppRoute(){
    return(
        <Routes >
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/" element={<Calculator/>}/>
            <Route path="*" element={<Navigate to={"/app"}/>}/>        
        </Routes>
)
}