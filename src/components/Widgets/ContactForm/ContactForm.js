import {
  Box,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "../../UI/Buttons/PrimaryButton/PrimaryButton";
import {
  contactContainer,
  formInput,
  formLabel,
  formTextBox,
  formTitles,
} from "./contactFormStyle";

const ContactForm = () => {
  const [formValues, setFormValues] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <FormControl required>
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
            </FormControl>
            <FormControl required>
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
            </FormControl>
            <FormControl required>
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
            </FormControl>

            <FormControl required>
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
            </FormControl>

            <FormControl required>
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
              <PrimaryButton btnText="Submit" handleSubmit={handleSubmit} />
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
