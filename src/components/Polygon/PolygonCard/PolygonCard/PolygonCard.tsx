import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledPolygonCard } from "./PolygonCardStyle";
import { Polygon } from "../../../../Types/Types";

interface PolygonCardProps {
  Mypolygon: Polygon;
}

export default function PolygonCard(props: PolygonCardProps): JSX.Element {
  const { Year, Month, Day, Hour, Minutes } = props.Mypolygon.dateTime;
  const CreationDate =
    Year + "/" + Month + "/" + Day + "/" + Hour + ":" + Minutes;
  return (
    <StyledPolygonCard>
      <CardMedia
        component="img"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>ID : {props.Mypolygon.id}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Creation Date : {CreationDate}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Export TO JSON</Button>
      </CardActions>
    </StyledPolygonCard>
  );
}
