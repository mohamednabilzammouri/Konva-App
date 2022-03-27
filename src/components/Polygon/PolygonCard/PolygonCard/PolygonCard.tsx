import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledPolygonCard } from "./PolygonCardStyle";
import { Polygon } from "../../../../Types/Types";
import { Downloader } from "../../../FileManagement/ExportJson";

interface PolygonCardProps {
  Mypolygon: Polygon;
}

export default function PolygonCard(props: PolygonCardProps): JSX.Element {
  const { Year, Month, Day, Hour, Minutes } = props.Mypolygon.dateTime;
  const CreationDate =
    Year + "/" + Month + "/" + Day + "/" + Hour + ":" + Minutes;
  return (
    <StyledPolygonCard>
      <CardMedia component="img" image={props.Mypolygon.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>
            ID : {props.Mypolygon.id}{" "}
            <span>
              {props.Mypolygon.isFinished ? "Finished" : "Unfinished"}
            </span>
          </h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Creation Date : {CreationDate}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Points Drawn : {props.Mypolygon.points.length}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{
            color: "white",
            backgroundColor: "green",
            width: "100%",
            marginTop: "auto",
          }}
          onClick={() => {
            Downloader(props.Mypolygon, props.Mypolygon.id);
          }}
        >
          Export TO JSON
        </Button>
      </CardActions>
    </StyledPolygonCard>
  );
}
