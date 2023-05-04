import React, { useState, useEffect } from "react";
import { Container, AppBar, TextField, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Articles from "./components/Articles/Articles";
import Form from "./components/Form/Form";
import { getArticles, getUserArticles } from "./actions/articles";
import useStyles from "./styles";
import { useSelector } from "react-redux";



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const userArticles = useSelector((state) => state.userArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const articles = useSelector((state) => state.articles);

  function matchesSearchQuery(article, searchQuery) {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.description.toLowerCase().includes(lowerCaseQuery)
    );
  }
  
  const filteredArticles = [
    ...userArticles.filter((article) => matchesSearchQuery(article, searchQuery)),
    ...articles.filter((article) => matchesSearchQuery(article, searchQuery)),
  ];
  useEffect(() => {
    dispatch(getArticles());
  }, [currentId, dispatch]);
  useEffect(() => {
    dispatch(getUserArticles());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <TextField
          fullWidth
          className={classes.inputField}
          id="fullWidth"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Articles articlesList={filteredArticles} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
