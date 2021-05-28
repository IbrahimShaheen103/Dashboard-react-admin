import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton, Avatar, CardHeader, CardContent, CardActions, Card, Typography } from "@material-ui/core";
import Masonry from 'react-masonry-css';
import Zoom from 'react-reveal/Zoom'
const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: red[500]
    },
 
}));

const ListComponent = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => setData(json))
    })
    const classes = useStyles();
    const breakpoints={
        default:3,
        1100:2,
        700:1
    }
    return (
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {data.map(item => (
                <div key={item.id}>
                    <Zoom>
                    <Card >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {item.postId}
                                </Avatar>
                            }
                            title={item.name}
                            subheader={item.email}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                    </Zoom>
                </div>
            ))}
        </Masonry>

    );
}
export default ListComponent;