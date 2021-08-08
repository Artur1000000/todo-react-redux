import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "relative",
  },
}));

export default function FormComponent(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} id="form" noValidate autoComplete="off">
      {props.children}

      <Divider />
      <div style={{ width: "80%", margin: "5px auto" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ margin: "10px 0px" }}
            onClick={props.sendInReducer}
          >
            add
          </Button>
        </Grid>
      </div>
    </form>
  );
}
