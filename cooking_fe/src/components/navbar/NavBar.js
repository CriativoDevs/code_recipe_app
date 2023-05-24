import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });

  const MenuItems = [
    {
      Name: "Home",
      Link: "/",
    },
    {
      Name: "Recipes",
      Link: "#",
    },
    {
      Name: "About Us",
      Link: "#",
    },
    {
      Name: "Subscribe",
      Link: "#",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar color="default" position="sticky" elevation={0}>
      <StyleToolbar>
        <Box flex={{ xs: 25, md: 1 }}>
          <Typography variant="h4" color={"tomato"}>
            Code Wizard Recipes
          </Typography>
        </Box>
        <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography variant="body2">{item.Name}</Typography>
          ))}
        </MenuBox>
        <Box flex={1}>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            color="warning"
            label="Search"
            variant="standard"
          />
          <MenuIcon
            sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Box>
      </StyleToolbar>
      <Drawer
        anchor={"top"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
      >
        <List>
          <ListItem>
            {MenuItems.map((item) => (
              <ListItemButton>{item.Name}</ListItemButton>
            ))}
          </ListItem>
        </List>
        <TextField
          sx={{ display: { xs: "flex", md: "none" } }}
          color="warning"
          label="Search"
          variant="outlined"
        />
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
