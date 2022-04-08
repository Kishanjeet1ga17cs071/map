import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App() {
  return (
    <div className="App">
  <MapContainer center={[28.704060, 77.102493]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
  <Marker position={[28.6129, 77.2295]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  
  );
}

export default App;
