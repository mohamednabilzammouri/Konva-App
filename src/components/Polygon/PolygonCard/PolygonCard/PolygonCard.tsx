import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CopyEditButton,
  ExportToJsonButton,
  StyledPolygonCard,
} from "./PolygonCardStyle";
import { Polygon } from "../../../../Types/Types";
import { Downloader } from "../../../FileManagement/ExportJson";
import { Link } from "react-router-dom";

interface PolygonCardProps {
  Mypolygon: Polygon;
}

export default function PolygonCard({
  Mypolygon,
}: PolygonCardProps): JSX.Element {
  const { Year, Month, Day, Hour, Minutes } = Mypolygon.dateTime;
  const { image, id, isFinished, points } = Mypolygon;
  const CreationDate =
    Year + "/" + Month + "/" + Day + "/" + Hour + ":" + Minutes;
  return (
    <StyledPolygonCard>
      <CardMedia component="img" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>
            ID : {id} <span>{isFinished ? "Finished" : "Unfinished"}</span>
          </h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Creation Date : {CreationDate}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>Points Drawn : {points.length}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <ExportToJsonButton
          size="small"
          onClick={() => {
            Downloader(Mypolygon, "Polygon_ID_" + id);
          }}
        >
          Export TO JSON
        </ExportToJsonButton>
        <Link to={`/?id=${id}`} style={{ textDecoration: "none" }}>
          <CopyEditButton size="small">Copy & Edit</CopyEditButton>
        </Link>
      </CardActions>
    </StyledPolygonCard>
  );
}
