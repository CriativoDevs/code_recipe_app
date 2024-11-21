import { Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsCard from "../posts/PostsCard";
import { useParams } from "react-router-dom";

const CatBasedPost = () => {
  const [blog, setBlog] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    // A const abaixo pode ter qualquer nome
    const fetchData = async () => {
      try {
        const API_URL =
          process.env.REACT_APP_API_URL ||
          "https://criativodevs.pythonanywhere.com/code_recipe_app/api";
        const res = await axios.get(`${API_URL}/categoryBaseBlogs/${id}/`);
        // Abaixo é feito atribuído as informações que é recebido do BE.
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // Toda vez que o blog for aberto, a função abaixo será chamada.
    fetchData();
    // Aqui colocamos os id para o caso de recarregar a pagina, sempre mostrar od dados
  }, [id]);

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
      >
        Categories Page
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        {blog.map((post) => (
          <Grid
            item
            xs
          >
            <PostsCard
              title={post.title}
              excerpt={post.excerpt}
              image={`${process.env.REACT_APP_API_URL}/${post.image}/`}
              blogHref={`/details/${post.slug}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>
      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={10}
          shape="rounded"
          color={"warning"}
        />
      </Stack>
    </Container>
  );
};

export default CatBasedPost;
