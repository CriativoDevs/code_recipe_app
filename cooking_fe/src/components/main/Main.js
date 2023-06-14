import { Box, Container, Stack } from "@mui/material";
import Posts from "../posts/Posts";
import Rightbar from "../rightbar/Rightbar";

const Main = () => {
  return (
    <Container>
      <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={3}>
          <Posts />
        </Box>
        <Box flex={1} display={{ xs: "none", md: "block" }}>
          <Rightbar />
        </Box>
      </Stack>
    </Container>
  );
};

export default Main;
