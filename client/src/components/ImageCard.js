import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";



export default function ImageCard() {


    return (
        <Card sx={{ maxWidth: 300 }} sx={{ margin: "20px" }} >
            <CardMedia
                component="img"
                height="250"
                image={process.env.PUBLIC_URL + "/assets/study_group.jpeg"}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" fontFamily={'Roboto'} >
                    Study with Peers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    StudySpace allows you to connect to other students in similar
                    courses and area of study
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to="/auth">Login</Link></Button>
            </CardActions>
        </Card>
    );
}