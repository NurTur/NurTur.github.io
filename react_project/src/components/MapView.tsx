import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ExchangePoint } from "../types";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


interface MapViewProps {
  isOpen: boolean;
  onClose: () => void;
  points: ExchangePoint[];
  city: string;
  currency: string;
  center: { lat: number, lng: number },
  subsetIdx: [number | null]

}

// Красный маркер (центр)
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Синий маркер (точки)
const blueIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Синий маркер (точки)
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapView({ isOpen, onClose, points, city, currency, center,
  subsetIdx
}: MapViewProps) {

  console.log('-----', points);
  if (!isOpen) return null;

  if (!points || points.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl h-5/6 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-lg">Карта ({city.toUpperCase()}, {currency.toUpperCase()})</h2>
            <button onClick={onClose} className="text-red-500 font-bold">✕</button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-600">Нет точек для отображения</p>
          </div>
        </div>
      </div>
    );
  }


  console.log('+++++++ ', center)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl h-5/6 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Карта ({city.toUpperCase()}, {currency.toUpperCase()})</h2>
          <button onClick={onClose} className="text-red-500 font-bold">✕</button>
        </div>
        <div className="flex-1">
          <MapContainer
            center={[center.lat, center.lng]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {points.map((p, i) => (
              <Marker key={i} position={[p.lat, p.lng]} icon={subsetIdx.indexOf(i)>=0 ? blueIcon : greenIcon}>
                <Popup>
                  <span>{`${p.name}-${p.address}`}<br /></span>
                  {p.phones.map(phone => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="inline-block bg-blue-50 px-3 py-1 rounded-full mr-2 mb-2 transition-colors text-blue-600 hover:text-blue-800"
                    >
                      {phone}
                    </a>
                  ))}
                </Popup>
              </Marker>
            ))}
            <Marker position={[center.lat, center.lng]} icon={redIcon}>
              <Popup>Центр</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}