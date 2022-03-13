import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox";

export default function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="title">{title}</Typography>
          <h2 className="cases">{cases}</h2>

          <Typography className="total">{total} Total</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
