import { Box, Stack, Typography, styled } from "@mui/material";
import drinks from "../../static/drinks.jpg";
import dessert from "../../static/dessert.jpg";
import dinner from "../../static/dinner.jpg";

const Suggestions = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    cursor: "pointer",
    overflow: "hidden",
    width: "100px",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });

  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <Stack
      Container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ overflow: "auto" }}
    >
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${drinks})}` }} />
        <StyledTypography>Drinks</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dessert})}` }} />
        <StyledTypography>Dessert</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dinner})}` }} />
        <StyledTypography>Dinner</StyledTypography>
      </CardBox>
    </Stack>
  );
};

export default Suggestions;
