import React from "react";
import TextField from "@material-ui/core/TextField";

export default function FieldComponent({ label}) {
  return (
    <div
      style={{
        padding: "10px 0px",
        width: "80%",
        maxWidth: "200px",
        minWidth: "150px",
        margin: "0 auto",
      }}
    >
      <TextField
        label={label.new}
        id="outlined-size-small"
        value={label.text}
        variant="outlined"
        size="small"
        onChange={(event) => {
          label.handleText(event.target.value)
        }}
      />
    </div>
  );
}