import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import useResponsive from "../../hooks/useResponsive";
import data from "../../assets/jsons.json";
import useAppContext from "../../hooks/useAppContext";

const Quiz = () => {
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [question, setQuestion] = useState(null);

  const { choosen, setChoosen } = useAppContext();
  const { isMobile, isTablet } = useResponsive();

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("choosen"))
      setChoosen(JSON.parse(localStorage.getItem("choosen")));
    if (!localStorage.getItem("choosen")) setChoosen([]);
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

  const getAnswer = (idQuestion, idOption) => {
    try {
      console.log(choosen);
      console.log({ idQuestion }, { idOption });
      const optionChoosen = choosen.find(
        (item) => item.idQuestion == idQuestion
      );
      if (!optionChoosen) {
        localStorage.setItem(
          "choosen",
          JSON.stringify([...choosen, { idQuestion, idOption }])
        );
        setChoosen([...choosen, { idQuestion, idOption }]);
      }
      if (optionChoosen) {
        const newListChoosen = choosen.filter((item) => {
          if (item.idQuestion != idQuestion) return item;
        });
        localStorage.setItem(
          "choosen",
          JSON.stringify([...newListChoosen, { idQuestion, idOption }])
        );
        setChoosen([...newListChoosen, { idQuestion, idOption }]);
      }
      if (
        !localStorage.getItem("count") &&
        params.ques != quiz.questions.length
      )
        navigate("/quiz/" + params.id + "/" + (+params.ques + 1));
      //   console.log(choosen);
      //   localStorage.setItem("choosen", JSON.stringify(choosen));
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkAnswer = (idQuestion, idOption) => {
    try {
      console.log(choosen);
      const optionChoosen = choosen.find(
        (item) => item.idQuestion == idQuestion && item.idOption == idOption
      );
      if (optionChoosen) return true;
      return false;
    } catch (err) {
      console.log(err.message);
    }
  };

  const countCorrectAnswer = () => {
    try {
      console.log(choosen);
      for (let i = 1; i < quiz.questions.length; i++) {
        const notChoosen = choosen.find((item) => {
          return item.idQuestion == i;
        });
        console.log(notChoosen);
        if (typeof notChoosen == "undefined") {
          enqueueSnackbar("you haven't choosen answer for question " + i, {
            variant: "error",
          });
          return "";
        }
      }
      let count = 0;
      choosen.map((item) => {
        const question = quiz.questions.find(
          (ques) => ques.id == item.idQuestion
        );
        console.log(question);
        if (question.correctOptionId == item.idOption) count++;
      });
      navigate("/result/" + params.id + "/" + count);
      localStorage.setItem("count", count);
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
                backgroundColor: localStorage.getItem("count")
                  ? "#ffb901"
                  : params.ques > index
                  ? "#ffb901"
                  : "#eeeeee",
                cursor: "pointer",
              }}
              width={100 / quiz?.questions.length + "%"}
              height="10px"
              borderRadius="6px"
              onClick={() => navigate("/quiz/" + params.id + "/" + (index + 1))}
            ></Box>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography
            sx={{ opacity: 0.7, cursor: "pointer" }}
            fontFamily='"Montserrat", sans-serif'
            fontSize={12}
            fontWeight={600}
            onClick={() => navigate("/home")}
          >
            BACK TO HOME
          </Typography>
        </Box>
        <Box display="flex" gap={3}>
          <Box
            display="flex"
            gap={1}
            pb={isMobile ? 4 : isTablet ? 8 : 10}
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              +params.ques != 1
                ? navigate("/quiz/" + params.id + "/" + (+params.ques + -1))
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
          <Box
            display="flex"
            gap={1}
            pb={isMobile ? 4 : isTablet ? 8 : 10}
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              +params.ques == quiz?.questions.length &&
              localStorage.getItem("count")
                ? navigate("home")
                : +params.ques == quiz?.questions.length
                ? countCorrectAnswer()
                : navigate("/quiz/" + params.id + "/" + (+params.ques + 1))
            }
          >
            {" "}
            <Typography
              sx={{ opacity: 0.7 }}
              fontFamily='"Montserrat", sans-serif'
              fontSize={12}
              fontWeight={600}
            >
              {+params.ques != quiz?.questions.length
                ? "NEXT"
                : localStorage.getItem("count")
                ? "Return to home"
                : "Submit"}
            </Typography>
            <img
              src="/rightArrow2.png"
              style={{
                cursor: "pointer",
                display:
                  +params.ques == quiz?.questions.length ? "none" : "flex",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" pb={4}>
        <Box display="flex" flexDirection="column" gap={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            px={isMobile ? 1 : isTablet ? 2 : 5}
          >
            <Typography
              color="#ffc221"
              fontFamily='"Montserrat", sans-serif'
              fontSize={24}
            >
              Question {+params.ques} / {quiz.questions.length}
            </Typography>
            <Typography
              fontSize={isMobile ? 20 : isTablet ? 32 : 40}
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
                    localStorage.getItem("count")
                      ? checkAnswer(question.id, option.id) == true &&
                        option.id != question.correctOptionId
                        ? "tomato"
                        : option.id == question.correctOptionId
                        ? "#108cfe"
                        : "#f2f2f2"
                      : "#f2f2f2"
                  }
                  border={
                    checkAnswer(question.id, option.id) == true
                      ? "1px solid #108cfe"
                      : "1px solid transparent"
                  }
                  display="flex"
                  alignItems="center"
                  width={isMobile ? "90vw" : isTablet ? "75vw" : "50vw"}
                  p={2}
                  fontFamily='"Montserrat", sans-serif'
                  fontWeight={600}
                  sx={{
                    cursor: localStorage.getItem("count") ? "auto" : "pointer",
                  }}
                  onClick={() => getAnswer(question.id, option.id)}
                >
                  {option.text}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Quiz;
