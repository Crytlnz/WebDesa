import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useVillageArea } from "../hooks/useApi";

// Ikon Marker Ungu
const purpleIcon = new L.Icon({
  iconUrl: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=home|9b59b6",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Komponen untuk menampilkan area desa
const VillageArea = () => {
  const { area, villageCenter, loading, error } = useVillageArea();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3 className="font-sans" style={{ fontSize: "24px", marginBottom: "20px" }}>Koordinat Desa</h3>
      <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
        {/* Pusat Desa */}
        <div style={{ flex: 1, margin: "10px", zIndex: "0" }}>
          <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#6c757d" }}>Pusat Desa</h4>
          <MapContainer
            center={villageCenter || [-6.9263, 107.6365]}
            zoom={15}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {villageCenter && (
              <Marker position={villageCenter} icon={purpleIcon}>
                <Popup>Pusat Desa</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        {/* Batas Wilayah Desa */}
        <div className="font-sans" style={{ flex: 1, margin: "10px", zIndex: "0" }}>
          <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#6c757d" }}>Batas Wilayah Desa</h4>
          <MapContainer
            center={area && area.length > 0 ? area[0] : [-6.9263, 107.6365]}
            zoom={15}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {area && area.length > 0 && (
              <Polygon pathOptions={{ color: "purple" }} positions={area}>
                <Popup>Batas Wilayah Desa</Popup>
              </Polygon>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default VillageArea;