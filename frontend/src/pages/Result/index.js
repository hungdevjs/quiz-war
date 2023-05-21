import { Box, Container, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import useAppContext from "../../hooks/useAppContext";
import useResponsive from "../../hooks/useResponsive";

const Result = () => {
  const params = useParams();

  const { choosen } = useAppContext();
  const { isTablet, isMobile } = useResponsive();

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        gap={5}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            fontSize={isMobile ? 36 : isTablet ? 62 : 62}
            fontWeight={600}
            fontFamily='"Montserrat", sans-serif'
          >
            The result is: {params.count} / {choosen.length}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : isTablet ? "row" : "row"}
          gap={isMobile ? 2 : isTablet ? 5 : 5}
        >
          <Button
            variant="contained"
            borderRadius={10}
            sx={{
              backgroundColor: "#108cfe",
              borderRadius: 5,
              padding: "10px 50px",
            }}
          >
            Detail
          </Button>
          <Button
            variant="contained"
            borderRadius={10}
            sx={{
              backgroundColor: "#108cfe",
              borderRadius: 5,
              padding: "10px 50px",
            }}
          >
            Return to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Result;
