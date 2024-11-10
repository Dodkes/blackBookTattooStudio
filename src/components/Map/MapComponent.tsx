import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

export default function MapComponent() {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 49.9490777,
    lng: 15.2647834,
  };

  return (
    <APIProvider
      apiKey={apiKey}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        style={mapContainerStyle}
        defaultZoom={18}
        defaultCenter={center}
        mapId={"e4ed0a59f2065b17"}
      >
        <AdvancedMarker position={center}>
          <Pin
            background={"white"}
            glyphColor={"black"}
            borderColor={"black"}
            scale={1.5}
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
