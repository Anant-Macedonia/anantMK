import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, SvgIcon } from "@mui/material";

const CustomCard = ({ title, content, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <SvgIcon component={image} inheritViewBox />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
