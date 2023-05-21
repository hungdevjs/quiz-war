import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuizDetail = ({ quiz }) => {
  const navigate = useNavigate();
  console.log(quiz);
  const { category, description, image, id } = quiz;

  return (
    <Box
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
      py={3}
      onClick={() => navigate("/quiz/" + id + "/1")}
    >
      <img src={image} width={150} />
      <Typography fontSize={28} fontWeight={600}>
        {category}
      </Typography>
      <Typography fontSize={14} sx={{ opacity: 0.7 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default QuizDetail;
