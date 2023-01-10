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
  popoverContentContainer,
  navigationMobile,
  menuIcon,
  viewServicesLink,
} from "./navigationStyle";
import designImage from "../../../../public/designService.png";
import developImage from "../../../../public/devService.png";

const navigationLinks = [
  // { name: "Our Company", href: "/company" },
  { name: "Services", href: "/services" },
  // { name: "Portfolio", href: "/portfolio" },
];

const navigationMobileLinks = [
  // { name: "Our Company", href: "/company" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const designServiceDescription =
  "Our design service offers a full range of support for all your design needs. Our team of experienced designers will work with you to create visually stunning and effective designs that will help you stand out in the market.";
const developmentServiceDescription =
  "Our development service offers a full range of support for all your development needs. Our team will work with you to create innovative and effective solutions that will help you achieve your business goals.";

const designItems = [
  {
    title: "UX/UI Design",
    description:
      "Creating intuitive and user-friendly interfaces that enhance the overall user experience of your product or service.",
  },
  {
    title: "Marketing Sites",
    description: "Create a professional and effective online presence.",
  },
];

const DevelopmentItems = [
  {
    title: "POC",
    description:
      "Creating intuitive and user-friendly interfaces that enhance the overall user experience of your product or service.",
  },
  {
    title: "API-based development",
    description:
      "Easily connect your systems and data to other applications and platforms.",
  },
  {
    title: "Knowledge sites",
    description:
      "Create a comprehensive and user-friendly resource for your customers or employees.",
  },
  {
    title: "Marketing sites",
    description: "Create a professional and effective online presence.",
  },
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
  const [openPopover, setOpenPopover] = useState(false);

  const [hoveredService, setHoveredService] = useState("Design");

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenPopover(false);
  };

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
                <Box key={item.name} onMouseLeave={handleClose}>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={item.href}
                    passHref
                  >
                    <Typography
                      onMouseEnter={handleHover}
                      sx={router.pathname == item.href ? activeLink : link}
                    >
                      {item.name}
                    </Typography>
                  </Link>

                  <Popover
                    onMouseLeave={handleClose}
                    sx={{ marginTop: "30px" }}
                    open={openPopover}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    PaperProps={{
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        width: "70%",
                      },
                    }}
                    onClose={handleClose}
                    disableEnforceFocus
                  >
                    <Paper onMouseLeave={handleClose}>
                      <Grid container spacing={1} sx={popoverContentContainer}>
                        <Grid item xs={12} md={3}>
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

                        <Grid item xs={5} md={4}>
                          {hoveredService == "Design" ? (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                src={designImage}
                                width={93}
                                height={128}
                                alt="design"
                              />
                              <Typography sx={middleHoveredSectionDescription}>
                                {designServiceDescription}
                              </Typography>
                              <Link
                                href="/services"
                                passHref
                                onClick={handleClose}
                              >
                                <Box
                                  sx={viewServicesLink}
                                  onClick={handleClose}
                                >
                                  view all services
                                </Box>
                              </Link>
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                src={developImage}
                                width={93}
                                height={123}
                                alt="dev"
                              />
                              <Typography sx={middleHoveredSectionDescription}>
                                {developmentServiceDescription}
                              </Typography>
                              <Link href="/services" passHref>
                                <Box
                                  sx={viewServicesLink}
                                  onClick={handleClose}
                                >
                                  view all services
                                </Box>
                              </Link>
                            </Box>
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
                          <Grid item xs={6} md={4.5}>
                            {designItems.map((item) => {
                              return (
                                <Box key={item.title}>
                                  <Typography sx={hoveredSectionTitle}>
                                    {item.title}
                                  </Typography>
                                  <Typography
                                    sx={rightHoveredSectionDescription}
                                  >
                                    {item.description}
                                  </Typography>
                                </Box>
                              );
                            })}
                          </Grid>
                        ) : (
                          <Grid
                            item
                            xs={6}
                            md={4.5}
                            sx={{ paddingLeft: "64px" }}
                          >
                            {DevelopmentItems.map((item) => {
                              return (
                                <Box key={item.title}>
                                  <Typography sx={hoveredSectionTitle}>
                                    {item.title}
                                  </Typography>
                                  <Typography
                                    sx={rightHoveredSectionDescription}
                                  >
                                    {item.description}
                                  </Typography>
                                </Box>
                              );
                            })}
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
              <MenuIcon sx={menuIcon} />
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
            <MenuIcon sx={menuIcon} />
          </IconButton>
        </Box>

        <List sx={navigationMobile}>
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
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
export default Navigation;
