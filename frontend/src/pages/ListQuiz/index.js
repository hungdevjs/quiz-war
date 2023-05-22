import { Box, Typography, Container, Divider } from "@mui/material";

import useResponsive from "../../hooks/useResponsive";
import QuizDetail from "./QuizDetail";
import data from "../../assets/jsons.json";

const ListQuiz = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Container>
        <Box display="flex" alignItems="center" gap={2} py={2}>
          <img src="/logo.png" style={{ width: "50px" }} />
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={isMobile ? 28 : isTablet ? 30 : 32}
            fontWeight={600}
          >
            Quiz War
          </Typography>
        </Box>
      </Container>
      <Divider sx={{ alignSelf: "stretch" }} />;
      <Container>
        <Box display="flex" flexDirection="column" gap={5}>
          <Box>
            <Typography
              fontSize={32}
              fontWeight={600}
              fontFamily='"Montserrat", sans-serif'
            >
              List Quizs
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            {data.quizs.map((quiz) => {
              return <QuizDetail id={quiz.id} quiz={quiz} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ListQuiz;
