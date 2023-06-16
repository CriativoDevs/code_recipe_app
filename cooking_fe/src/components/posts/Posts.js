import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import PostsCard from "./PostsCard";

const Posts = () => {
  return (
    <Box>
      <Typography variant="h4" align="center">
        Latest Recipes
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
        <Grid item xs>
          <PostsCard myDirection={"flex"} />
        </Grid>
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
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
      </Grid>
      <Stack spacing={2} mt={3} mb={3} justifyContent="center" alignItems="center">
        <Pagination count={10} shape="rounded" color={"warning"}/>
      </Stack>
    </Box>
  );
};

export default Posts;
