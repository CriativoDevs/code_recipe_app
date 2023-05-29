import { Box, Container, Grid, Typography, styled } from "@mui/material";
import drinks from "../../static/drinks.jpg";
import meat from "../../static/meat.jpg";
import burger from "../../static/burger1.jpg";
import appetizer from "../../static/appetizer.jpg";

const Hero = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
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
    color: "white",
    background: "tomato",
    fontSize: 20,
  });

  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },
    width: "80%",
  }));

  return (
    <Container>
      <Grid container columnSpacing={2} direction={"row"} rowSpacing={2}>
        <Grid item md={3} xs={6}>
          {" "}
          {/* xs faz com que em telas menores, como de telemóveis, os cards fiquem em duas colunas */}
          <StyledCard sx={{ backgroundImage: `url(${meat})` }}>
            <StyledWrapper>
              {" "}
              {/* Foi criado esse wrapper para fazer com que o titulo fique dentro da imagem sem altera ela. */}
              <StyledTypography>Meat</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${appetizer})` }}>
            <StyledWrapper>
              {" "}
              {/* Foi criado esse wrapper para fazer com que o titulo fique dentro da imagem sem altera ela. */}
              <StyledTypography>Appetizer</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
            <StyledWrapper>
              {" "}
              {/* Foi criado esse wrapper para fazer com que o titulo fique dentro da imagem sem altera ela. */}
              <StyledTypography>Burger</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${drinks})` }}>
            <StyledWrapper>
              {" "}
              {/* Foi criado esse wrapper para fazer com que o titulo fique dentro da imagem sem altera ela. */}
              <StyledTypography>Drinks</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
