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

const PostsCard = ({ myDirection, blogHref, title, image, excerpt }) => {
    return (
        <Box mt={3}>
            <Link href={blogHref} sx={{ textDecoration: "none" }}>
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
                            image={image}
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
                        <CardContent sx={{minHeight: "260px"}}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                align="center"
                            >
                                {title}
                                {/* Se eu decidir chamar de mytitle por exemplo, quando estiver chamando essa prop no outro component, devo chamar dessa maneira. */}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h7"
                                align="center"
                            >
                                {excerpt}
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
