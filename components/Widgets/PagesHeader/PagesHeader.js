import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import classes from "./pagesHeader.module.css";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import WebhookIcon from "@mui/icons-material/Webhook";
import { ClickButton } from "../../UI/Button/Button";

const PagesHeader = ({ title, description, link, buttonText }) => {
  return (
    <Grid container className={classes.pagesHeader}>
      <Grid className={classes.pagesHeaderContent}>
        <Typography variant="h2">{title}</Typography>
        <Typography>{description}</Typography>
        {link && (
          <Grid container className={classes.pagesHeaderLinks}>
            <Grid item>
              <AdUnitsIcon />
              <Link href="/abc" passHref>
                App Development
              </Link>
            </Grid>
            <Grid item>
              <DesktopWindowsIcon />
              <Link href="/dfg"> Web Development</Link>
            </Grid>
            <Grid item>
              <WebhookIcon />
              <Link href="/"> Things of internet</Link>
            </Grid>
          </Grid>
        )}
        <Grid className={classes.pagesHeaderButton}>
          {buttonText && <ClickButton buttonText={buttonText} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PagesHeader;
