import { Routes, Route, Navigate } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import QuizRoute from "./QuizRoute";
import ResultRoute from "./ResultRoute";
import ListQuizRoute from "./ListQuizRoute";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeRoute />} />
      <Route path="/quiz/*" element={<QuizRoute />} />
      <Route path="/result/*" element={<ResultRoute />} />
      <Route path="/list" element={<ListQuizRoute />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Navigation;
