import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, SvgIcon } from "@mui/material";
import Link from "next/link";
import classes from "./card.module.css";

const CustomCard = ({ title, content, image, link }) => {
  console.log(link);
  return (
    <Card className={classes.card} sx={{ maxWidth: 330, minHeight: 360 }}>
      <Link href={link} passHref>
        <CardActionArea>
          <SvgIcon component={image} inheritViewBox />
          <CardContent sx={{ minHeight: 360 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CustomCard;
