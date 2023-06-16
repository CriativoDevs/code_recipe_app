import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import burger from "../../static/burger1.jpg";

const PostsCard = ({ myDirection }) => {
  return (
    <Box mt={3}>
      <Link
        href="http://localhost:3000/details"
        sx={{ textDecoration: "none" }}
      >
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection}`,
                md: `${myDirection}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height={"300"}
              image={burger}
              alt="burger_image"
              sx={{
                width: "560px",
                cursor: "pointer",
                "&hover": {
                  opacity: 0.8,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" align="center">
                Yummy
              </Typography>
              <Typography gutterBottom variant="h5" align="center">
                Because it is a set of words that are not possible to be
                understood in their literal sense, it is often very difficult or
                even impossible to translate idiomatic expressions into other
                languages. But at the same time, they talk a lot about the
                peculiarity of a culture and its people.
              </Typography>
              <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Share
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostsCard;
