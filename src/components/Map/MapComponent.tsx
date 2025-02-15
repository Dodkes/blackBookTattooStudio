import { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";

export default function MapComponent() {
  const mapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new Map({
      target: mapDivRef.current as HTMLElement,
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

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div
      ref={mapDivRef}
      style={{
        width: "100%",
        height: "400px",
        filter: "grayscale(100%) contrast(80%)",
      }}
    ></div>
  );
}
