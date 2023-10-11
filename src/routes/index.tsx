import {Routes, Route, Navigate } from "react-router-dom";
import { Calculator } from "../page/calc/Calculator";
import SignIn from "../page/Sign-in/SignIn";


export function AppRoute(){
    return(
        <Routes >
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/" element={<Calculator/>}/>
            <Route path="*" element={<Navigate to={"/app"}/>}/>        
        </Routes>
)
}