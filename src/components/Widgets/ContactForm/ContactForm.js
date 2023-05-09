import {
  Box,
  Container,
  Grid,
  Input,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useRef } from "react";
import {
  btnContainer,
  contactContainer,
  formGrid,
  formInput,
  formTextBox,
  formTitles,
} from "./contactFormStyle";

import emailjs from "@emailjs/browser";

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

const ContactForm = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState([]);
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("md"));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcvdtig",
        "template_kw55x9m",
        form.current,
        "lEmSJRKdg85dSdYzU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Message sent!");
  };

  return (
    <Box sx={contactContainer}>
      <Container>
        <Grid container>
          {!smallScreenSize && (
            <Grid item xs={12} md={5} lg={6}>
              <Typography sx={formTitles}>Start New Project</Typography>
              <Typography sx={formTitles}>Redesign Project</Typography>
              <Typography sx={formTitles}>Ask a Question</Typography>
              <Typography sx={formTitles}>Say Hello</Typography>
            </Grid>
          )}
          <Grid item xs={12} md={6} sx={formGrid}>
            <form ref={form} onSubmit={sendEmail}>
              <Box>
                <Input
                  required
                  disableUnderline
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  value={formValues.email}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <Input
                  required
                  disableUnderline
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <Input
                  required
                  disableUnderline
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name *"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <Input
                  disableUnderline
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <Input
                  required
                  id="message"
                  name="message"
                  placeholder="Your Message *"
                  value={formValues.message}
                  onChange={handleInputChange}
                  multiline
                  minRows={7}
                  disableUnderline
                  sx={formTextBox}
                />
              </Box>
              <Box sx={btnContainer}>
                <Input disableUnderline type="submit" value="Submit" />
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
