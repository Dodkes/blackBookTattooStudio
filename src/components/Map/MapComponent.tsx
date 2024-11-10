import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

const mapStyles = [
  //terrain color
  {
    elementType: "geometry",
    stylers: [{ color: "#363434" }],
  },
  //roads color
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#262525" }],
  },
  //disable labels
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  //color of labels cities
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  //border of labels cities
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#00000" }],
  },
];

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
        defaultZoom={17}
        defaultCenter={center}
        // styles={mapStyles}
        mapId={"3279e28a649d0431"}
      >
        <AdvancedMarker position={center}>
          <Pin />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
