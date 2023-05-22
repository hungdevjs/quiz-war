import { Routes, Route, Navigate } from "react-router-dom";

import ResultDetail from "../pages/ResultDetail";

const ResultDetailRoute = () => {
  return (
    <Routes>
      <Route path="/:id/:ques" element={<ResultDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ResultDetailRoute;
