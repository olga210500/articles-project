import React from "react";
import { Grid } from "@material-ui/core";

import Article from "./Article/Article";
import useStyles from "./styles";

const Articles = ({ articlesList }) => {
  const classes = useStyles();

  return (
    <>
      {!!articlesList.length && (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articlesList.map((article) => (
            <Grid item xs={12} sm={6} md={4}>
              <Article  key={article.id} article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Articles;
