import React from "react";
import CardComponent from "./CardComponent";
import Grid from "@material-ui/core/Grid";

export default function ContentComponent({ markers, state }) {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={3}>
        {markers.map((marker, index) => (
          <Grid item key={index} xs >
            <CardComponent
              title={state[marker].title}
              listItems={state[marker].list}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
