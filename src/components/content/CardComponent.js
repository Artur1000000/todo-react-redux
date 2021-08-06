import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
});

export default function CardComponent({ title, listItems }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {listItems.map((item, index) => (
          <Typography component="h2" key={index}>{item}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
