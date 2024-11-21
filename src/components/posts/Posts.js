import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsCard from "./PostsCard";

const Posts = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    // A const abaixo pode ter qualquer nome
    const fetchData = async () => {
      try {
        const API_URL =
          process.env.REACT_APP_API_URL ||
          "https://criativodevs.pythonanywhere.com/code_recipe_app/api";
        const res = await axios.get(`${API_URL}/blog/`);

        // Abaixo é feito atribuído as informações que é recebido do BE.
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // Toda vez que o blog for aberto, a função abaixo será chamada.
    fetchData();
  }, []);

  const [post, setPost] = useState([]);

  useEffect(() => {
    // A const abaixo pode ter qualquer nome
    const fetchData = async () => {
      try {
        const API_URL =
          process.env.REACT_APP_API_URL ||
          "https://criativodevs.pythonanywhere.com/code_recipe_app/api";
        const res = await axios.get(`${API_URL}/PopularPostApiView/`);
        // Abaixo é feito atribuído as informações que é recebido do BE.
        setPost(res.data);
        console.log("API Response:", res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // Toda vez que o blog for aberto, a função abaixo será chamada.
    fetchData();
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
      >
        Latest Recipes
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
              image={post.image}
              blogHref={`/details/${post.slug}`}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h4"
        bgcolor={"black"}
        color={"white"}
        align="center"
        mt={4}
        mb={4}
      >
        Most Popular
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={{ md: "row" }}
      >
        {post.map((pop) => (
          <Grid
            item
            md={6}
            sm={6}
          >
            <PostsCard
              title={pop.title}
              excerpt={pop.excerpt}
              image={
                pop.image
                  ? `https://criativodevs.pythonanywhere.com/code_recipe_app${pop.image}`
                  : "/placeholder.png"
              }
              myDirection={"block"}
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
    </Box>
  );
};

export default Posts;
