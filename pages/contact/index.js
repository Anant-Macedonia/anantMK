import { Container, Typography } from "@mui/material";
import Form from "../../components/UI/Form/Form";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <Container>
      <Typography className={classes.contactHeading} variant="h2">
        CONTACT US
      </Typography>
      <Form />
    </Container>
  );
};

export default Contact;
