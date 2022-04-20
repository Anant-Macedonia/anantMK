import { Container, Grid, TextField, Typography } from "@mui/material";
import { ClickButton } from "../Button/Button";
import classes from "./form.module.css";

const Form = () => {
  return (
    <Container className={classes.formContainer}>
      <Grid className={classes.formHeader}>
        <Typography variant="h5" gutterBottom>
          Book a no-obligation consultation
        </Typography>
        <Typography gutterBottom>
          Drop in your details and an analyst will be in touch with you at the
          earliest.
        </Typography>
      </Grid>
      <form>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              placeholder="Enter email"
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Enter name"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
              multiline
              rows={4}
              placeholder="Type your message here"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <ClickButton
              buttonText={"Submit"}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
