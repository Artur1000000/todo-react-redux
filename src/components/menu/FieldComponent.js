import React from "react";
import TextField from "@material-ui/core/TextField";

export default function FieldComponent({ value, change, label }) {
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
        label={label}
        id="outlined-size-small"
        value={value}
        variant="outlined"
        size="small"
        onChange={(event) => {
          change(event.target.value);
        }}
      />
    </div>
  );
}
