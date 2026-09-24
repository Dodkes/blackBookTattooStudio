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
import { defaults as defaultInteractions } from "ol/interaction";
import markerImage from "../../assets/favicon.png";

export default function MapComponent() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      // don't hijack page scrolling
      interactions: defaultInteractions({ mouseWheelZoom: false }),
      layers: [
        new TileLayer({
          className: "map-tiles",
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([15.26553614529326, 49.94914934517503]),
        zoom: 17,
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
    <section className="map" aria-label="Mapa">
      <div id="map" className="map-canvas" />
      <a
        className="map-card"
        href="https://maps.app.goo.gl/9wA8rsC4XSvdKm1N6"
        target="_blank"
        rel="noreferrer"
      >
        <span className="eyebrow">Kde nás najdete</span>
        <strong>Husova 114</strong>
        <span>Kutná Hora, Česká republika</span>
        <span className="map-card-link">Navigovat →</span>
      </a>
    </section>
  );
}
