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
import dinner from "../../static/dinner.jpg";
import Suggestions from "../suggestions/Suggestions";

const DetailsPage = () => {
  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        Title of the recipe
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        In here we have a generic text for now
      </Typography>
      <Typography variant="body1" align="center" mt={2}>
        Here we have a generic text also for now. hehe
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={dinner}
          alt="image"
        />
      </Box>
      <Typography variant="body1" align="center" mt={2}>
        Here we have a generic text also for now. hehe Here we have a generic
        text also for now. hehe Here we have a generic text also for now. hehe
        Here we have a generic text also for now. hehe Here we have a generic
        text also for now. hehe Here we have a generic text also for now. hehe
        Here we have a generic text also for now. hehe
      </Typography>
      <Typography variant="h3" align="center" mt={2}>
        Ingredients
      </Typography>
      <List>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Meat" />
        </ListItemButton>
      </List>
      <Typography variant="body1" align="center" mt={2}>
        Here we have a generic text also for now. hehe Here we have a generic
        text also for now. hehe Here we have a generic text also for now. hehe
        Here we have a generic text also for now. hehe Here we have a generic
        text also for now. hehe Here we have a generic text also for now. hehe
        Here we have a generic text also for now. hehe
      </Typography>
      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like.
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
