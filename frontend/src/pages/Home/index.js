import {
  Box,
  Typography,
  Divider,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useResponsive from "../../hooks/useResponsive";
import QuizDetail from "../../components/QuizDetail";

import data from "../../assets/jsons.json";
import Quiz from "../Quiz";

const Home = () => {
  const navigate = useNavigate();

  const { isTablet, isMobile } = useResponsive();
  console.log(data);

  useEffect(() => {
    localStorage.removeItem("choosen");
    localStorage.removeItem("count");
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pb={5}>
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
      <Divider sx={{ alignSelf: "stretch" }} />
      <Container>
        <Box display="flex" flexDirection="column" gap={2}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={isTablet ? 5 : 3}
            py={5}
          >
            <Grid item sx={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap={4}
                flexGrow={1}
              >
                <Box display="flex" flexDirection="column">
                  <Typography
                    fontSize={isMobile ? 48 : 84}
                    fontWeight={600}
                    lineHeight={1.2}
                    fontFamily='"Montserrat", sans-serif'
                  >
                    Web & Mobile
                  </Typography>
                  <Typography
                    fontSize={isMobile ? 48 : 84}
                    fontWeight={600}
                    lineHeight={1.2}
                    fontFamily='"Montserrat", sans-serif'
                  >
                    Design
                  </Typography>
                  <Typography
                    fontSize={isMobile ? 48 : 84}
                    fontWeight={600}
                    lineHeight={1.2}
                    fontFamily='"Montserrat", sans-serif'
                  >
                    Developer
                  </Typography>
                </Box>
                <Typography
                  fontSize={isMobile ? 18 : 24}
                  sx={{ opacity: 0.7 }}
                  fontFamily='"Montserrat", sans-serif'
                >
                  helps you to organize your income and expenses
                </Typography>
                <Box display="flex" gap={1}>
                  <Button
                    variant="contained"
                    size={isMobile ? "small" : "large"}
                    sx={{
                      backgroundColor: "#7854f7",
                      ":hover": { backgroundColor: "#7854f7" },
                    }}
                    fontFamily='"Montserrat", sans-serif'
                  >
                    Try for free <img src="/downArrow.png" />{" "}
                  </Button>
                  <Typography
                    fontSize={isMobile ? 16 : 22}
                    sx={{ opacity: 0.7 }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontFamily='"Montserrat", sans-serif'
                  >
                    - Web, iOS and Android
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
              >
                <img
                  src="/banner.png"
                  style={{ width: isMobile ? "324px" : "512px" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Box
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={2}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    borderRadius: "6px",
                    backgroundColor: "#f4f4ff",
                  },
                }}
                p={2}
                onClick={() => navigate("/list")}
              >
                <Typography fontSize={48} fontWeight={600} lineHeight={1.2}>
                  Our process
                </Typography>
                <Typography fontSize={16} sx={{ opacity: 0.7 }}>
                  Helps you to make amazing things. Click to see all
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <QuizDetail quiz={data.quizs[0]} />
            </Grid>
            <Grid item xs={12} md={3}>
              <QuizDetail quiz={data.quizs[1]} />
            </Grid>
            <Grid item xs={12} md={3}>
              <QuizDetail quiz={data.quizs[2]} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
