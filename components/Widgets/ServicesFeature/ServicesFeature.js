import { Grid, Typography } from "@mui/material";
import Link from "next/link";

const ServicesFeature = ({
  title,
  description,
  links,
  imageUrl,
  className,
}) => {
  return (
    <Grid container className={className.serviceContainer}>
      <Grid item xs={6} className={className.image}>
        <img className={className.image} src={imageUrl} />
      </Grid>
      <Grid item xs={6} className={className.serviceContent}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
        {links && (
          <Typography component="ul">
            {links.map((link, index) => {
              return (
                <Typography key={index} component="li">
                  <Link href={link.url}>{link.name}</Link>
                </Typography>
              );
            })}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ServicesFeature;
