import React, { useEffect, useState } from "react";
import { Box, Grid, Modal, TextField } from "@mui/material";
import axios from "axios";
import PostsCard from "../posts/PostsCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PostSearch = () => {
  const [postSearch, setPostSearch] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [lookup, setLookup] = useState();

  useEffect(() => {
    // A const abaixo pode ter qualquer nome
    const fetchData = async () => {
      try {
        const API_URL =
          process.env.REACT_APP_API_URL || "http://localhost:8000/api";
        const res = await axios.get(`${API_URL}/blog/`);
        // Abaixo é feito atribuído as informações que é recebido do BE.
        setPostSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // Toda vez que o blog for aberto, a função abaixo será chamada.
    fetchData();
  }, []);

  return (
    <div>
      <TextField
        sx={{ display: { xs: "none", md: "flex" } }}
        color="warning"
        label="Search"
        variant="standard"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            color="warning"
            label="Search"
            variant="standard"
            onChange={(e) => setLookup(e.target.value)}
          />
          {postSearch
            .filter((search) => search.title.toLowerCase().includes(lookup))
            .map((search) =>
              lookup.length > 0 ? (
                <Grid
                  item
                  xs
                >
                  <PostsCard
                    title={search.title}
                    excerpt={search.excerpt}
                    image={search.image}
                    blogHref={`/details/${search.slug}`}
                    myDirection={"flex"}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
        </Box>
      </Modal>
    </div>
  );
};

export default PostSearch;
