import React, { useState, useCallback } from "react";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FieldComponent from "./FieldComponent";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormComponent from "./FormComponent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function MenuComponent({
  open,
  handleDrawer,
  onAddElement,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [vegetable, setVegetable] = useState("");
  const [fruit, setFruit] = useState("");
  const [berry, setBerry] = useState("");

  const titleMenu = "add to the list";
  const sendInReducer = useCallback(() => {
    if (vegetable.length > 0) {
      onAddElement("vegetables", vegetable);
      setVegetable("");
    }
    if (fruit.length > 0) {
      onAddElement("fruits", fruit);
      setFruit("");
    }
    if (berry.length > 0) {
      onAddElement("berries", berry);
      setBerry("");
    }
  }, [vegetable, fruit, berry, onAddElement]);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawer}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography noWrap style={{ padding: "10px 0" }}>
          {titleMenu.toUpperCase()}
        </Typography>
      </Grid>
      <Divider />

      <FormComponent sendInReducer={sendInReducer}>
        <FieldComponent
          value={vegetable}
          change={setVegetable}
          label={"vegetable"}
        />
        <FieldComponent value={fruit} change={setFruit} label={"fruit"} />
        <FieldComponent value={berry} change={setBerry} label={"berry"} />
      </FormComponent>
    </Drawer>
  );
}
