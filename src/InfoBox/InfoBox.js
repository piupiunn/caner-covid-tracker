import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, onClick }) {
  return (
    <Card
      onClick={onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <span className="infoBox__title1">{title}</span>
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          <span className="infoBox__title2"> {cases}</span>
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          <span className="infoBox__title3"> {total} Total</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
