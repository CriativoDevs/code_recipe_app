import {
    Box,
    CardMedia,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Category from "../categoryList/Category";
import Suggestions from "../suggestions/Suggestions";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const [postIngredients, setPostIngredients] = useState("");

    let { slug } = useParams();

    useEffect(() => {
        // A const abaixo pode ter qualquer nome
        const fetchData = async () => {
            try {
                const API_URL =
                  process.env.REACT_APP_API_URL ||
                  "https://criativodevs.pythonanywhere.com/api";
                const res = await axios.get(`${API_URL}/blog/${slug}/`);
                // Abaixo é feito atribuído as informações que é recebido do BE.
                setBlogDetails(res.data);
                setPostIngredients(res.data.ingredients);
            } catch (error) {
                console.log(error);
            }
        };
        // Toda vez que o blog for aberto, a função abaixo será chamada.
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <Category />
            <Typography variant="h3" align="center" mt={4}>
                {blogDetails.title}
            </Typography>
            <Typography variant="body2" align="center" color={"GrayText"} p={4}>
                In here we have a generic text for now
            </Typography>
            <Typography variant="body1" align="center" mt={2}>
                {blogDetails.content}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                    sx={{ height: "500px", width: "500px" }}
                    component="img"
                    image={blogDetails.image}
                    alt="image"
                />
            </Box>
            <Typography variant="body1" align="center" mt={2}>
                {blogDetails.contentTwo}
            </Typography>
            <Typography variant="h3" align="center" mt={2}>
                Ingredients
            </Typography>
            <List>
                {postIngredients.split(",").map((ingredients) => (
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <DoubleArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary={ingredients} />
                    </ListItemButton>
                ))}
            </List>
            <Typography
                variant="h5"
                color={"white"}
                bgcolor={"black"}
                align="center"
            >
                You may also like.
            </Typography>
            <Suggestions />
        </Container>
    );
};

export default DetailsPage;
