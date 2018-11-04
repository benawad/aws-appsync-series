import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface Props {
  name: string;
  price: number;
}

export const AuctionCard = ({ name, price }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>$ {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Bid</Button>
      </CardActions>
    </Card>
  );
};
