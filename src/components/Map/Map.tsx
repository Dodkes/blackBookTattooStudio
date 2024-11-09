import { GoogleMap, LoadScript } from "@react-google-maps/api";

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

export default function Map() {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 49.9490777,
    lng: 15.2647834,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCYilbWkali0T3ahRA2QkHYIgNPcdvaMWk">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={18}
        options={{ styles: mapStyles }}
      ></GoogleMap>
    </LoadScript>
  );
}
