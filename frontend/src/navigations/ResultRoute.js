import { Routes, Route, Navigate } from "react-router-dom";

import Result from "../pages/Result";

const ResultRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Result />} />
            <Route path="*" element={<Navigate to="/" replace/>} /> 
        </Routes>
    )
}

export default ResultRoute