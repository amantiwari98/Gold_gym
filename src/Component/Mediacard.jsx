import React from 'react';
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
        maxWidth: 345,
    },
});

export default function ImgMediaCard5(props) {
    const classes = useStyles();

    return (
        <div className="col-md-3 mt-4">
            <Card className={classes.root} style={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="180"
                        image={props.imgsrc}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{letterSpacing:'1px', textTransform:'capitalize'}}>
                            {props.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button size="small" color="primary">
                        Share
        </Button> */}
                    <Button size="small" color="primary" style={{letterSpacing:'2px'}}>
                        Read More
        </Button>
                </CardActions>
            </Card>
        </div>
    );
};

