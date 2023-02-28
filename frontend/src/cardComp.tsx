import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface ICardProps {
  name: string;
  data: string;
}

const card = ({ name, data }: ICardProps) => (
  <React.Fragment>
    <CardContent sx={{ height: "32vh", maxWidth: "60vh" }}>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography
        variant="body2"
        align="left"
        pl="10px"
        sx={{ overflow: "auto" }}
      >
        <br />
        {data}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({ name, data }: ICardProps) {
  return (
    <Box sx={{ minWidth: 275, mr: "1vw", ml: "1vw" }}>
      <Card variant="outlined">{card({ name, data })}</Card>
    </Box>
  );
}
