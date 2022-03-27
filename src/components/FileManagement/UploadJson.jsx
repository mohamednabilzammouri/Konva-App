import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { Input } from "@material-ui/core";
import { StyledPolygonCard } from "../Polygon/PolygonCard/PolygonCard/PolygonCardStyle";
import { MyPolygonsContext } from "../../Context/Context";

function UploadJson() {
  const { savePolygon } = useContext(MyPolygonsContext);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      try {
        savePolygon(JSON.parse(e.target.result));
      } catch {
        alert("Your File is Invalid");
      }
    };
  };
  return (
    <StyledPolygonCard>
      <CardMedia
        component="img"
        image="https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/07/Json.jpg"
        style={{ padding: "3em 0" }}
      />

      <CardMedia />
      <CardActions>
        <label htmlFor="contained-button-file" style={{ width: "100%" }}>
          <Input
            id="contained-button-file"
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
            inputProps={{ accept: "application/json" }}
          />
          <Button
            variant="contained"
            component="span"
            style={{ backgroundColor: "green", width: "100%" }}
          >
            Upload
          </Button>
        </label>
      </CardActions>
    </StyledPolygonCard>
  );
}

export default UploadJson;
