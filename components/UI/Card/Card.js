import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, SvgIcon } from "@mui/material";
import Link from "next/link";
import classes from "./card.module.css";

const CustomCard = ({ title, content, icon, image, link }) => {
  return (
    <Card
      className={classes.card}
      sx={{ maxWidth: 330, minHeight: 360, maxHeight: 450 }}
    >
      <Link href={link} passHref>
        <CardActionArea>
          {icon && <SvgIcon component={icon} inheritViewBox />}
          {image && <img src={image} className={classes.image} />}
          <CardContent sx={{ minHeight: 360, maxHeight: 450 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Grid dangerouslySetInnerHTML={{ __html: content }} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CustomCard;
