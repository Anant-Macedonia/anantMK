import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Hidden,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import classes from "./navigation.module.css";
const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Our Work", href: "/our-work" },
  { name: "Blog", href: "/category/blog" },
];
function Navigation() {
  const [open, setOpen] = useState(false);
  const [customClass, setCustomClass] = useState(classes.nav);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setCustomClass(classes.whiteNav);
    } else {
      setCustomClass(classes.nav);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <AppBar className={customClass} position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Typography
              className={classes.nav__logo}
              color="textPrimary"
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Anant Macedonia
            </Typography>
          </Link>

          <Hidden smDown>
            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  style={{ textDecoration: "none" }}
                  className={classes.link}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
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
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => {
            return (
              <ListItem key={item.name}>
                <Link
                  style={{ textDecoration: "none" }}
                  className={classes.link}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
export default Navigation;
