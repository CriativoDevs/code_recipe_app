import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import chef from "../../static/chef.jpg";
import SendIcon from "@mui/icons-material/Send";

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h5"
        align="center"
        mt={5}
      >
        Hey I'm The Chef
      </Typography>
      <CardMedia
        component={"img"}
        height={"300"}
        image={chef}
        alt="chef_image"
        sx={{
          width: "480px",
          cursor: "pointer",
          "&hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
          },
        }}
      />
      <Typography
        align="left"
        variant="body1"
      >
        I love make code as much I love make food!!
      </Typography>
      <Typography
        align="left"
        variant="body1"
      >
        Don't forget to visit my portfolio <br />{" "}
        <a
          href="https://criativodevs.online"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography
          align="center"
          variant="body1"
        >
          Ads here
        </Typography>
      </Card>
      <Typography
        mt={2}
        align="center"
        color={"white"}
        bgcolor={"tomato"}
      >
        Subscribe Via Email
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your email here!"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography
          align="center"
          variant="body1"
        >
          Ads here
        </Typography>
      </Card>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography
          align="center"
          variant="body1"
        >
          Ads here
        </Typography>
      </Card>
    </Box>
  );
};

export default Rightbar;
