import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import "./Button.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <div className="appbar">
          <a href="/home">
            <Typography variant="h4">
              Home
            </Typography>
          </a>
        </div>
      </AppBar>
    </div>
  );
}
