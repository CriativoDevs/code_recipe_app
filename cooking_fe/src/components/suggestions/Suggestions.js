import { Box, Stack, Typography, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Suggestions = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
      // A const abaixo pode ter qualquer nome
      const fetchData = async () => {
          try {
              const res = await axios.get(
                  `${process.env.REACT_APP_API_URL}/api/category/`
              );
              // Abaixo é feito atribuído as informações que é recebido do BE.
              setCategory(res.data);
          } catch (error) {
              console.log(error);
          }
      };
      // Toda vez que o category for aberto, a função abaixo será chamada.
      fetchData();
  }, []);

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
          {category.map((cat) => (
              <CardBox>
                  <StyledCard sx={{ backgroundImage: `url(${cat.image})}` }} />
                  <StyledTypography>{cat.name}</StyledTypography>
              </CardBox>
          ))}
      </Stack>
  );
};

export default Suggestions;
