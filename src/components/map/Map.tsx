"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import LocationMarker from "./LocationPointer";

const DEFAULT_CENTER: any = [23.737704855705548, 90.40943564985567];

const MapIndex = ({ dealersList }: any) => {
  return (
    <MapContainer
      className={styles.map}
      center={DEFAULT_CENTER}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {/* {dealersList?.map((dealer: any, index: number) => ( */}
      {/* <Marker
          position={[dealer.latitude, dealer.longitude]}
          eventHandlers={{
            click: () => {
              console.log("marker clicked");
            },
          }}
          icon={L.divIcon({
            iconSize: [size, size],
            iconAnchor: [size / 2, size + 9],
            className: "mymarker",
            html: ``,
          })}
        >
          <Popup>
            <div>
              <p className="font-bold">{dealer.name}</p>
              <p>{dealer.address}</p>
            </div>
          </Popup>
        </Marker> */}
      {/* ))} */}
    </MapContainer>
  );
};

export default MapIndex;
