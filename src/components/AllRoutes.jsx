import React from 'react'
import { Route, Routes } from "react-router-dom";
import  Start from "./Start"
import QuestionBox from "./QuestionBox";
import Result from './Result';

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/QuestionBox" element={<QuestionBox/>}></Route>
            <Route path="/Result" element={<Result/>}></Route>
        </Routes>
    )
}

export default AllRoutes