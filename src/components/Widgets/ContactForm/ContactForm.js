import {
  Box,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import {
  contactContainer,
  formInput,
  formLabel,
  formTextBox,
  formTitles,
} from "./contactFormStyle";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState([]);

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
      <Container sx={{ marginTop: "100px" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography sx={formTitles}>Start New Project</Typography>
            <Typography sx={formTitles}>Redesign Project</Typography>
            <Typography sx={formTitles}>Ask a Question</Typography>
            <Typography sx={formTitles}>Say Hello</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <Box>
                <InputLabel htmlFor="email" sx={formLabel}>
                  Email address
                </InputLabel>
                <Input
                  required
                  disableUnderline
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <InputLabel htmlFor="firstName" sx={formLabel}>
                  First Name
                </InputLabel>
                <Input
                  required
                  disableUnderline
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <InputLabel htmlFor="lastName" sx={formLabel}>
                  Last Name
                </InputLabel>
                <Input
                  required
                  disableUnderline
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <InputLabel htmlFor="phone" sx={formLabel}>
                  Phone Number
                </InputLabel>
                <Input
                  required
                  disableUnderline
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  sx={formInput}
                />
              </Box>

              <Box>
                <InputLabel htmlFor="message" sx={formLabel}>
                  Your message
                </InputLabel>
                <Input
                  required
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  multiline
                  minRows={7}
                  disableUnderline
                  style={formTextBox}
                />
              </Box>
              <Box
                sx={{
                  padding: "12px 32px",
                  background: "#EE6F57",
                  width: "181px",
                  height: "42px",
                  borderRadius: "20px",
                  fontWeight: 800,
                  fontSize: "18px",
                  fontFamily: "Mulish",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
