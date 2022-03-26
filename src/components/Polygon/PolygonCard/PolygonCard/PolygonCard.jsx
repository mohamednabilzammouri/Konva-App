import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledPolygonCard } from "./PolygonCardStyle";

export default function PolygonCard(props) {
  return (
    <StyledPolygonCard>
      <CardMedia
        component="img"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Mypolygon.points}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.Mypolygon.points}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Export TO JSON</Button>
      </CardActions>
    </StyledPolygonCard>
  );
}
