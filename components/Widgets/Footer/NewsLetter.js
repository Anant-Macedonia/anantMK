import React, { useState } from "react";
// import { CheckCircle } from "react-feather";
// import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
import { Box, Grid, Button, Typography, Container, Input } from "@mui/material";
import classes from "./newsLetter.module.css";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sendButtonMsg, setSendButtonMsg] = useState("Subscribe");
  const [newsletterSuccessMsg, setNewsletterSuccessMsg] = useState("");
  const [disabled, disableButton] = useState(false);

  const _handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await addToMailchimp(email, { NAME: name });
    if (res.result === "error") {
      setNewsletterSuccessMsg(`${email} is already subscribed to list.`);
    } else {
      setNewsletterSuccessMsg("Subscription Successful. Thanks!");
      setSendButtonMsg("Subscribed");
      setName("");
      setEmail("");
      disableButton(true);
    }

    setTimeout(() => {
      setNewsletterSuccessMsg("");
      setName("");
      setEmail("");
      setSendButtonMsg("Subscribe");
      disableButton(false);
    }, 5000);
  };

  const emailHandle = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const nameHandle = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <Container maxWidth="lg" className={classes.newsLetterContainer}>
      <Grid container spacing={2} className={classes.newsletterBox}>
        <Grid item xs={12} className={classes.newsletterTitleContainer}>
          <Typography variant="h2" className={classes.title}>
            Join Our Newsletter!
          </Typography>
          <Typography className={classes.newsLetterText}>
            Sign up below to receive email updates and see what's going on with
            our company
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.newsLetterForm}>
          <Box component="form" onSubmit={_handleSubmit}>
            <Grid container>
              <Grid item xs={12} className={classes.formGroup}>
                <Input
                  disableUnderline
                  className={classes.newsLetterInput}
                  size="small"
                  required
                  type="email"
                  value={email}
                  onChange={emailHandle}
                  placeholder="michael.s@gmail.com"
                />
              </Grid>
              <Grid className={classes.newsLetterBtnContainer}>
                <Button className={classes.subscribeBtn} variant="contained">
                  {sendButtonMsg}
                  {/* <HiOutlineArrowNarrowRight /> */}
                </Button>
              </Grid>
              <Grid className="warning-success">
                {/* {newsletterSuccessMsg !== "" && <CheckCircle size={13} />}{" "} */}
                {newsletterSuccessMsg}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsLetterBox;
