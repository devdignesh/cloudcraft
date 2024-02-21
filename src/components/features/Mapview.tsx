"use client";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";

const Mapview: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.weather);
 
  useEffect(() => {
    const loadMap = async () => {
      if (window.mappls && window.mappls.Map) {
        const map = new window.mappls.Map("map", {
          center: [data.coord.lat, data.coord.lon],
          zoomControl: false,
          tilt: 60,
          draggable: true,
          minZoom: 6,
          maxZoom: 17,
          backgroundColor: "#000",
          clickableIcons: false,
          zoom: 7,
        } as any);

        const Marker = (map: any) =>
          new (mappls as any).Marker({
            map: map,
            position: {
              lat: data.coord.lat,
              lng: data.coord.lon,
            },
            icon_url: "/icons/map_marker.png",
          });
        Marker(map);
      }
    };

    loadMap();
  }, [data]);

  return (
    <>
      <Card>
        <CardContent className="p-0 m-0">
          <div id="map" className="rounded-lg h-96"></div>
        </CardContent>
      </Card>
    </>
  );
};

export default Mapview;
