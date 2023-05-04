import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

import DeleteIcon from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";

import { deleteArticle,pinArticle } from "../../../actions/articles";
import useStyles from "./styles";
import { PersonPinCircleTwoTone } from "@material-ui/icons";

const Article = ({ article }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(pinArticle(article))}
        >
          <PersonPinCircleTwoTone fontSize="small" /> Pin
        </Button>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={
          article.urlToImage ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={article.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h5">{article.author}</Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h6"
        component="h3"
      >
        {article.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {article.description}
        </Typography>
      </CardContent>
      {article.id && (
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteArticle(article.id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Article;
