import React, { useState } from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createArticle } from "../../actions/articles";
import { useSelector } from "react-redux";
const Form = () => {
  const userArticles = useSelector((state) => state.userArticles);
  const [postData, setArticleData] = useState({
    id: 0,
    author: "",
    title: "",
    description: "",
    urlToImage: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setArticleData({ author: "", title: "", description: "", urlToImage: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData.id = userArticles.length + 1;
    dispatch(createArticle(postData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <TextField
          name="author"
          variant="outlined"
          label="Author"
          fullWidth
          value={postData.author}
          onChange={(e) =>
            setArticleData({ ...postData, author: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setArticleData({ ...postData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          minRows={4}
          value={postData.description}
          onChange={(e) =>
            setArticleData({ ...postData, description: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setArticleData({ ...postData, urlToImage: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
