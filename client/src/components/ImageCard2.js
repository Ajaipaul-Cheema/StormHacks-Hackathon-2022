import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ImageCard2() {


  return (
    <Card sx={{ maxWidth: 300 }} sx={{margin: "20px"}} >
      <CardMedia
        component="img"
        height="250"
        image={process.env.PUBLIC_URL + "/assets/student-walk.jpeg"}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily={'Roboto'} >
          Sign up with University
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Sign up now with the name of you university and courses
            to meet other students now!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign Up</Button>
      </CardActions>
    </Card>
  );
}