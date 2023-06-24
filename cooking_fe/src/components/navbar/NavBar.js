import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    styled,
    Box,
    TextField,
    Drawer,
    Link,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PostSearch from "../search/PostSearch";

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
            Link: "#",
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
        <>
            <AppBar color="default" position="sticky" elevation={0}>
                <StyleToolbar>
                    <Box flex={{ xs: 25, md: 1 }}>
                        <Link
                            href="http://localhost:3000/"
                            sx={{ textDecoration: "none" }}
                        >
                            <Typography
                                variant="h4"
                                color={"tomato"}
                                sx={{
                                    fontFamily: "Splash, cursive",
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                Code Wizard Recipes
                            </Typography>
                        </Link>
                    </Box>
                    <MenuBox
                        flex={1}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        {MenuItems.map((item) => (
                            <Typography variant="body2">{item.Name}</Typography>
                        ))}
                    </MenuBox>
                    <Box flex={1}>
                        
                        <PostSearch />
                        <MenuIcon
                            sx={{
                                display: { xs: "flex", md: "none" },
                                cursor: "pointer",
                            }}
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
                </Drawer>
                <TextField
                    sx={{ display: { xs: "flex", md: "none" } }}
                    color="warning"
                    label="Search"
                    variant="outlined"
                />
            </AppBar>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { xs: "column", md: "row" },
                    padding: 1,
                }}
            >
                <Typography align="center" variant="h5" mr={{ xs: 0, md: 1 }}>
                    Simple recipes made by a Coder!
                </Typography>
                <Typography
                    align="center"
                    variant="h5"
                    color={"tomato"}
                    sx={{ fontFamily: "Splash, cursive" }}
                >
                    Real Recipes, Real Codes.
                </Typography>
            </Box>
        </>
    );
};

export default NavBar;
