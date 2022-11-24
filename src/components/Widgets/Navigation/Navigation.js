import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/future/image";
import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List, ListItem, createTheme, useMediaQuery } from "@mui/material";
import ContactButton from "../../UI/Buttons/ContactButton/ContactButton";
import logo from "../../../../public/logo-anant-mk.svg";
import { link, activeLink, nav, navLogo, navToolbar } from "./navigationStyle";

const navigationLinks = [
  { name: "Our Company", href: "/company" },
  { name: "Services", href: "/services" },
  // { name: "Portfolio", href: "/portfolio" },
];

const navigationMobileLinks = [
  { name: "Our Company", href: "/company" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Navigation() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar sx={nav} position="static">
      <Container>
        <Toolbar disableGutters sx={navToolbar}>
          <Box sx={navLogo}>
            <Link href="/" passHref>
              <Image
                src={logo}
                width={!smallScreenSize ? 184 : 120}
                alt="logo"
              />
            </Link>
          </Box>

          <Hidden smDown>
            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  style={{ textDecoration: "none" }}
                  href={item.href}
                  passHref
                >
                  <Typography
                    sx={router.pathname == item.href ? activeLink : link}
                  >
                    {item.name}
                  </Typography>
                </Link>
              );
            })}
            <ContactButton btnText="Contact Us" />
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Box>
          <IconButton onClick={() => setOpen(false)}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <List sx={{ width: "273px", paddingLeft: "34px" }}>
          {navigationMobileLinks.map((item) => {
            return (
              <ListItem key={item.name} onClick={() => setOpen(false)}>
                <Link
                  key={item.name}
                  style={{ textDecoration: "none" }}
                  href={item.href}
                  passHref
                >
                  <Typography
                    sx={router.pathname == item.href ? activeLink : link}
                  >
                    {item.name}
                  </Typography>
                </Link>
              </ListItem>
            );
          })}

          {/* <ContactButton
            hamburgerContact
            btnText="Contact Us"
            onClick={() => setOpen(false)}
          /> */}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
export default Navigation;
