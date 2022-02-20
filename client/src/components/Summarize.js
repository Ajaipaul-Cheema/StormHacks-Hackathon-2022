import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";

export default function Summarize() {
  return (
    <Card sx={{ maxWidth: 300 }} sx={{ margin: "20px" }} >
      <CardMedia
                component="img"
                height="250"
                image={process.env.PUBLIC_URL + "/assets/ai.jpg"}
        
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Summarize 
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Our AI will summarize your text
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to='/summorize'>Go</Link></Button>
      </CardActions>
    </Card>
  );
}