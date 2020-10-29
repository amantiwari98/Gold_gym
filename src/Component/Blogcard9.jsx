import React from 'react';
import fit from '../images/fit3.jpeg';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 305,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.root} className="maincard">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={fit}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className="c" style={{color:'black'}}>
         How Excercise Tamed Her Anxity
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}