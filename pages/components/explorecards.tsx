import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MediaCard(props) {
  return (
    <Card >
      <CardMedia
        component="img"
        height="300"
        image={props.imgsrc}
        alt="green iguana"
      />
          <CardContent>
    
   <center>     <Typography variant="h6" color="text.secondary">
        {props.heading}
        </Typography></center>
      </CardContent>
      
      <CardActions style={{"justifyContent":"center"}}>
        
        <Button size="small">{props.btnText}</Button>
      </CardActions>
    </Card>
  );
}