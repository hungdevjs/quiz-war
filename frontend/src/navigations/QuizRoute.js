import { Routes, Route, Navigate } from "react-router-dom";

import Quiz from "../pages/Quiz";

const QuizRoute = () => {
  return (
    <Routes>
      <Route path="/:id/:ques" element={<Quiz />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default QuizRoute;
