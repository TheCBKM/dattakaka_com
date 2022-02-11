import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NextPage } from "next";

interface Props {
  imgsrc: string;
  btnText: string;
  heading: string;
}

const ExploreCards: NextPage<Props> = (props) => {
  return (
    <Card >
      <CardMedia
        component="img"
        height="300"
        image={props.imgsrc}
        alt="green iguana"
      />
      <CardContent sx={{ justifyContent: "center", display: "flex" }}>

        <Typography variant="h6" color="text.secondary">
          {props.heading}
        </Typography>
      </CardContent>

      <CardActions style={{ "justifyContent": "center" }}>

        <Button variant="contained" sx={{ background: "black" }} size="small">{props.btnText}</Button>
      </CardActions>
    </Card>
  );
}
export default ExploreCards