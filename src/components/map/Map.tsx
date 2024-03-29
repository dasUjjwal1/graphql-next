import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { MapContainer } = ReactLeaflet;

const Map = ({ children, width, height, ...rest }) => {
  return (
    <MapContainer {...rest}>{children(ReactLeaflet, Leaflet)}</MapContainer>
  );
};

export default Map;
