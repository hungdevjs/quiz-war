import { Box, Typography, Container, Divider, Grid } from "@mui/material";
import { useEffect } from "react";

import useResponsive from "../../hooks/useResponsive";
import QuizDetail from "./QuizDetail";
import data from "../../assets/jsons.json";

const ListQuiz = () => {
  const { isMobile, isTablet } = useResponsive();
  useEffect(() => {
    localStorage.removeItem("choosen");
    localStorage.removeItem("count");
  }, []);

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
          <Grid container spacing={2}>
            {data.quizs.map((quiz) => {
              return (
                <Grid item xs={12} sm={6} lg={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {" "}
                    <QuizDetail key={quiz.id} quiz={quiz} />{" "}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ListQuiz;
