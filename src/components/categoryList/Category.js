import { Box, Link, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  // eslint-disable-next-line
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // A const abaixo pode ter qualquer nome
    const fetchData = async () => {
      try {
        const API_URL =
          process.env.REACT_APP_API_URL ||
          "https://criativodevs.pythonanywhere.com/api";
        const res = await axios.get(`${API_URL}/category/`);

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
    borderRadius: "100%",
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
      mt={4}
      spacing={3}
      ml={3}
      sx={{ overflow: "auto" }}
    >
      {category.map((cat) => (
        <Link
          href={`category/${cat.id}`}
          sx={{ textDecoration: "none" }}
        >
          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${cat.image})}` }} />
            <StyledTypography>{cat.name}</StyledTypography>
          </CardBox>
        </Link>
      ))}
    </Stack>
  );
};

export default Category;
