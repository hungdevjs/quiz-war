import { Routes, Route, Navigate } from "react-router-dom";

import ListQuiz from "../pages/ListQuiz";

const ListQuizRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListQuiz />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ListQuizRoute;
