import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useEffect, useState } from "react";

import data from "../../assets/jsons.json";
import useAppContext from "../../hooks/useAppContext";

const Quiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [count, setCount] = useState(1);

  const { choosen, setChoosen } = useAppContext();

  const params = useParams();

  const getData = () => {
    try {
      const quizData = data.quiz.find((item) => item.id == params.id);
      setQuiz(quizData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   useEffect(() => {
  //     setCount(1);
  //   }, [params.id]);
  console.log(quiz);
  if (!quiz) return;
  return (
    <Box display="flex" flexDirection="column" px={3} gap={2}>
      <Box display="flex" py={1} gap={2}>
        {quiz?.questions.map((item, index) => {
          return (
            <Box
              sx={{
                backgroundColor: count >= index + 1 ? "#ffb901" : "#eeeeee",
              }}
              width={100 / quiz?.questions.length + "%"}
              height="10px"
              borderRadius="6px"
            ></Box>
          );
        })}
      </Box>
      <Box
        display="flex"
        gap={1}
        pb={10}
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={() => (count != 1 ? setCount(count - 1) : {})}
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
        {quiz?.questions.map((item, index) => {
          if (count != index + 1) return;
          return (
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
                  Question {index + 1} / {quiz.questions.length}
                </Typography>
                <Typography
                  fontSize={40}
                  fontWeight={600}
                  fontFamily='"Montserrat", sans-serif'
                >
                  {item.text}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                {item.options.map((option) => {
                  return (
                    <Box
                      id={option.id}
                      borderRadius={5}
                      backgroundColor="#f2f2f2"
                      display="flex"
                      alignItems="center"
                      width="50vw"
                      p={2}
                      fontFamily='"Montserrat", sans-serif'
                      sx={{ opacity: 0.8, cursor: "pointer" }}
                      onClick={() => {}}
                    >
                      {option.text}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#108cfe",
            borderRadius: 5,
            padding: "10px 50px",
          }}
          onClick={() => setCount(count + 1)}
        >
          {count == quiz?.questions.length ? "Submit" : "Next Question "}
          <img
            src="/rightArrow.png"
            style={{
              paddingLeft: "10px",
              display: count == quiz?.questions.length ? "none" : "flex",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Quiz;
