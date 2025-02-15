import { useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import markerImage from "../../assets/favicon.png";

export default function MapComponent() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([15.26553614529326, 49.94914934517503]),
        zoom: 19,
      }),
    });

    const markerStyle = new Style({
      image: new Icon({
        src: markerImage,
        scale: 0.2,
      }),
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([15.26553614529326, 49.94914934517503])),
    });

    marker.setStyle(markerStyle);

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
        filter: "grayscale(100%) contrast(80%)",
      }}
    />
  );
}
