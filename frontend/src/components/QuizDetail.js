import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuizDetail = ({ quiz }) => {
  const navigate = useNavigate();
  console.log(quiz);
  const { category, description, image, id } = quiz;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{ width: "100%", height: 300, cursor: "pointer" }}
        onClick={() => navigate("/quiz/" + id + "/1")}
      >
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight={600}
              fontFamily='"Montserrat", sans-serif'
            >
              {category}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontFamily='"Montserrat", sans-serif'
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuizDetail;
