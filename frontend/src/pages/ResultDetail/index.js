import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import data from "../../assets/jsons.json";
import useResponsive from "../../hooks/useResponsive";
import useAppContext from "../../hooks/useAppContext";

const ResultDetail = () => {
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [question, setQuestion] = useState(null);

  const { choosen, setChoosen } = useAppContext();
  const { isMobile, isTablet } = useResponsive();
  console.log(choosen);

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("choosen"))
      setChoosen(JSON.parse(localStorage.getItem("choosen")));
    console.log(JSON.parse(localStorage.getItem("choosen")));
  }, []);

  const getData = () => {
    try {
      const quizData = data.quizs.find((item) => item.id == params.id);
      const ques = quizData.questions.find((item) => item.id == +params.ques);
      setQuestion(ques);
      setQuiz(quizData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [params.id, params.ques]);
  console.log(question);

  const checkAnswer = (idQuestion, idOption) => {
    try {
      const optionChoosen = choosen.find(
        (item) => item.idQuestion == idQuestion && item.idOption == idOption
      );
      if (optionChoosen) return true;
      return false;
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(choosen);

  if (!quiz) return;
  return (
    <Box display="flex" flexDirection="column" px={3} gap={2} height="100vh">
      <Box display="flex" py={1} gap={2}>
        {quiz?.questions.map((item, index) => {
          return (
            <Box
              key={item.id}
              sx={{
                backgroundColor: "#ffb901",
              }}
              width={100 / quiz?.questions.length + "%"}
              height="10px"
              borderRadius="6px"
              onClick={() =>
                navigate("/resultdetail/" + params.id + "/" + (index + 1))
              }
            ></Box>
          );
        })}
      </Box>
      <Box
        display="flex"
        gap={1}
        pb={isMobile ? 4 : isTablet ? 8 : 10}
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={() =>
          +params.ques != 1
            ? navigate("/resultdetail/" + params.id + "/" + (+params.ques + -1))
            : {}
        }
      >
        <img src="/leftArrow.png" style={{ cursor: "pointer" }} />
        <Typography
          sx={{ opacity: 0.7 }}
          fontFamily='"Montserrat", sans-serif'
          fontSize={12}
          fontWeight={600}
        >
          PREVIOUS
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" pb={10}>
        <Box display="flex" flexDirection="column" gap={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            px={5}
          >
            <Typography
              color="#ffc221"
              fontFamily='"Montserrat", sans-serif'
              fontSize={24}
            >
              Question {+params.ques} / {quiz.questions.length}
            </Typography>
            <Typography
              fontSize={isMobile ? 24 : isTablet ? 32 : 40}
              fontWeight={700}
              fontFamily='"Montserrat", sans-serif'
            >
              {question.text}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {question.options.map((option) => {
              return (
                <Box
                  key={option.id}
                  borderRadius={5}
                  backgroundColor={
                    checkAnswer(question.id, option.id) == true &&
                    option.id != question.correctOptionId
                      ? "tomato"
                      : option.id == question.correctOptionId
                      ? "#108cfe"
                      : "#f2f2f2"
                  }
                  border="10px"
                  display="flex"
                  alignItems="center"
                  width={isMobile ? "90vw" : isTablet ? "75vw" : "50vw"}
                  p={2}
                  fontFamily='"Montserrat", sans-serif'
                  fontWeight={600}
                >
                  {option.text}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        pb={25}
        gap={2}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#108cfe",
            borderRadius: 5,
            padding: "10px 50px",
          }}
          onClick={() =>
            +params.ques == quiz?.questions.length
              ? navigate("/home")
              : navigate(
                  "/resultdetail/" + params.id + "/" + (+params.ques + 1)
                )
          }
        >
          {+params.ques == quiz?.questions.length
            ? "Return to Home"
            : "Next Question "}
          <img
            src="/rightArrow.png"
            style={{
              paddingLeft: "10px",
              display: +params.ques == quiz?.questions.length ? "none" : "flex",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default ResultDetail;
