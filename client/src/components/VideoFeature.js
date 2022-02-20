import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";

export default function VideoFeature() {
  return (
    <Card sx={{ maxWidth: 300 }} sx={{ margin: "20px" }} >
      <CardMedia
                component="img"
                height="250"
                image={process.env.PUBLIC_URL + "/assets/zoom.jpg"}
        
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Live Tutor
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Watch one of our tutors live
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to='/video' target="_blank">Go</Link></Button>
      </CardActions>
    </Card>
  );
}