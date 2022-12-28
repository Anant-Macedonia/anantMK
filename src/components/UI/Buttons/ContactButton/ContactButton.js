import Link from "next/link";
import { Box, Button, Popover, Typography } from "@mui/material";
import {
  contactBtn,
  contactBtnWithoutStyle,
  contactDetailsTitle,
  contactPopoverContainer,
} from "./contactButtonStyle.js";
import { useState } from "react";

const ContactButton = ({ btnText, hamburgerContact }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  // const [hoveredService, setHoveredService] = useState("Design");

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setPopoverOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
  };

  const contactDetails = [
    {
      title: "Contact Form",
      description:
        "Feel free to send us a message and we will respond as soon as possible.",
    },
    {
      title: "Schedule a live demo",
      description: "Set up a live demo consultation with one of our experts. ",
    },
  ];
  return (
    <Link href="/contact" passHref>
      <Box>
        <Button
          sx={hamburgerContact ? contactBtnWithoutStyle : contactBtn}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {btnText}
          <Popover
            open={popoverOpen}
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
                display: "flex",
                justifyContent: "center",
                width: "614px",
                height: "300px",
                marginTop: "20px",
              },
            }}
            disableEnforceFocus
          >
            <Box onMouseLeave={handleMouseLeave}>
              {contactDetails.map((item) => {
                return (
                  <Box sx={contactPopoverContainer}>
                    <Link Link href="/contact" passHref>
                      <Typography sx={contactDetailsTitle}>
                        {item.title}
                      </Typography>
                    </Link>
                    <Typography>{item.description}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Popover>
        </Button>
      </Box>
    </Link>
  );
};

export default ContactButton;
