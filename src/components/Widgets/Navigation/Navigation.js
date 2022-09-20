import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/future/image";
import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Typography,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List, ListItem } from "@mui/material";
import ContactButton from "../../UI/Buttons/ContactButton/ContactButton";
import logo from "../../../../public/logo-anant-mk.svg";
import { link, nav, navLogo } from "./navigationStyle";

const navigationLinks = [
  { name: "Our Company", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
];

function Navigation() {
  const [open, setOpen] = useState(false);
  // const [customClass, setCustomClass] = useState(classes.nav);

  // const controlNavbar = () => {
  //   if (window.scrollY > 250) {
  //     setCustomClass(classes.whiteNav);
  //   } else {
  //     setCustomClass(classes.nav);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <AppBar sx={nav} position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Box sx={navLogo}>
            <Link href="/" passHref>
              <Image src={logo} height={50} alt="logo" />
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
                  <Typography sx={link}>{item.name}</Typography>
                </Link>
              );
            })}
            <ContactButton btnText="Contact Us" />
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => {
            return (
              <ListItem key={item.name}>
                <Link
                  key={item.name}
                  style={{ textDecoration: "none" }}
                  href={item.href}
                  passHref
                >
                  <Typography sx={link}>{item.name}</Typography>
                </Link>
              </ListItem>
            );
          })}
          <ContactButton btnText="Contact Us" />
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
export default Navigation;
