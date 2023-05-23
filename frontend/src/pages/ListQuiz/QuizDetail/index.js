import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import useResponsive from "../../../hooks/useResponsive";

const QuizDetail = ({ quiz }) => {
  const navigate = useNavigate();

  const { isMobile, isTablet } = useResponsive();

  const { category, image, description, questions, id } = quiz;

  return (
    <Card
      sx={{ maxWidth: 345, height: 300, cursor: "pointer" }}
      onClick={() => navigate("/quiz/" + id + "/1")}
    >
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuizDetail;
