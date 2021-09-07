import { MapContainer, TileLayer } from "react-leaflet";
import { createUseStyles } from "react-jss";
import "leaflet/dist/leaflet.css";

const useStyles = createUseStyles({
  map: {
    height: 400
  }
});

const INITIAL_POSITION = {
  lat: 37.773972,
  lng: -122.431297
};
const INITIAL_ZOOM = 12;

export default function MainMap() {
  const classes = useStyles();
  return (
    <MapContainer
      center={INITIAL_POSITION}
      className={classes.map}
      zoom={INITIAL_ZOOM}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
