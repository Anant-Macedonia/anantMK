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
  Grid,
  Popover,
  Paper,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List, ListItem, createTheme, useMediaQuery } from "@mui/material";
import ContactButton from "../../UI/Buttons/ContactButton/ContactButton";
import logo from "../../../../public/logo-anant-mk.svg";
import {
  link,
  activeLink,
  nav,
  navLogo,
  navToolbar,
  service,
  activeService,
  hoveredSectionTitle,
  rightHoveredSectionDescription,
  middleHoveredSectionDescription,
} from "./navigationStyle";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredService, setHoveredService] = useState("Design");

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopup = Boolean(anchorEl);
  const id = openPopup ? "simple-popover" : undefined;

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
              return item.name !== "Services" ? (
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
              ) : (
                <Box key={item.name}>
                  <Typography
                    aria-owns={openPopup ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handleHover}
                    sx={router.pathname == item.href ? activeLink : link}
                  >
                    {item.name}
                  </Typography>

                  <Popover
                    sx={{ marginTop: "50px" }}
                    id={id}
                    open={openPopup}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    PaperProps={{
                      style: {
                        width: "100%",
                      },
                    }}
                  >
                    <Paper onMouseLeave={handleClose}>
                      <Grid
                        container
                        spacing={2}
                        sx={{ height: "460px", padding: "50px 10px" }}
                      >
                        <Grid item xs={4}>
                          <Typography
                            sx={
                              hoveredService == "Design"
                                ? activeService
                                : service
                            }
                            onMouseEnter={() => setHoveredService("Design")}
                          >
                            Design
                          </Typography>
                          <Typography
                            sx={
                              hoveredService == "Development"
                                ? activeService
                                : service
                            }
                            onMouseEnter={() =>
                              setHoveredService("Development")
                            }
                          >
                            Development
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Divider
                            orientation="vertical"
                            variant="fullWidth"
                            style={{ width: "5px", backgroundColor: "#EE6F57" }}
                          />
                        </Grid>

                        <Grid item xs={3}>
                          {hoveredService == "Design" ? (
                            <Typography sx={middleHoveredSectionDescription}>
                              Our design service offers a full range of support
                              for all your design needs. Our team of experienced
                              designers will work with you to create visually
                              stunning and effective designs that will help you
                              stand out in the market.
                            </Typography>
                          ) : (
                            <Typography sx={middleHoveredSectionDescription}>
                              Our development service offers a full range of
                              support for all your development needs. Our team
                              will work with you to create innovative and
                              effective solutions that will help you achieve
                              your business goals.
                            </Typography>
                          )}
                        </Grid>
                        <Grid item>
                          <Divider
                            orientation="vertical"
                            variant="fullWidth"
                            style={{
                              width: "5px",
                              backgroundColor: "#EE6F57",
                            }}
                          />
                        </Grid>
                        {hoveredService == "Design" ? (
                          <Grid item xs={4.5}>
                            <Typography sx={hoveredSectionTitle}>
                              UX/UI Design
                            </Typography>
                            <Typography sx={rightHoveredSectionDescription}>
                              Creating intuitive and user-friendly interfaces
                              that enhance the overall user experience of your
                              product or service.
                            </Typography>
                            <Typography sx={hoveredSectionTitle}>
                              Marketing Sites
                            </Typography>
                            <Typography sx={rightHoveredSectionDescription}>
                              Create a professional and effective online
                              presence.
                            </Typography>
                          </Grid>
                        ) : (
                          <Grid item xs={4.5} sx={{ paddingLeft: "64px" }}>
                            <Typography sx={hoveredSectionTitle}>
                              POC
                            </Typography>
                            <Typography sx={rightHoveredSectionDescription}>
                              Creating intuitive and user-friendly interfaces
                              that enhance the overall user experience of your
                              product or service.
                            </Typography>

                            <Typography sx={hoveredSectionTitle}>
                              API-based development
                            </Typography>
                            <Typography sx={rightHoveredSectionDescription}>
                              Easily connect your systems and data to other
                              applications and platforms.
                            </Typography>

                            <Typography sx={hoveredSectionTitle}>
                              Knowledge sitest
                            </Typography>
                            <Typography sx={rightHoveredSectionDescription}>
                              Create a comprehensive and user-friendly resource
                              for your customers or employees.
                            </Typography>

                            <Typography sx={hoveredSectionTitle}>
                              Marketing sites
                            </Typography>
                            <Typography sx={rightHoveredSectionDescription}>
                              Create a professional and effective online
                              presence.
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                    </Paper>
                  </Popover>
                </Box>
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
