// Variables and Package
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import "./Button.css";

// Export Component App Bar
export default function ButtonAppBar() {
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
