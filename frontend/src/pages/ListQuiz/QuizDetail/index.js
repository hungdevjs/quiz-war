import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useResponsive from "../../../hooks/useResponsive";

const QuizDetail = ({ quiz }) => {
  const navigate = useNavigate();

  const { isMobile, isTablet } = useResponsive();

  const { category, image, description, questions, id } = quiz;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      py={3}
      px={2}
      borderRadius={3}
      backgroundColor="#f4f4ff"
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "isTablet" ? "row" : "row"}
        gap={2}
      >
        <Box display="flex" alignItems="center">
          <img
            src={image}
            width="100px"
            height="90px"
            style={{ borderRadius: 6 }}
          />
        </Box>
        <Box width={isMobile ? "200px" : isTablet ? "300px" : "500px"}>
          <Typography
            fontSize={28}
            fontWeight={600}
            fontFamily='"Montserrat", sans-serif'
          >
            {category}
          </Typography>
          <Typography
            fontSize={14}
            fontFamily='"Montserrat", sans-serif'
            sx={{ opacity: 0.8 }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
      >
        <Typography fontSize={20} fontFamily='"Montserrat", sans-serif'>
          {questions.length} {"questions"}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#108cfe",
            borderRadius: 4,
          }}
          onClick={() => navigate("/quiz/" + id + "/1")}
        >
          Play
        </Button>
      </Box>
    </Box>
  );
};

export default QuizDetail;
