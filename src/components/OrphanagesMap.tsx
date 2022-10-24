import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'
import mapMarker from '../images/map-marker.svg'

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Ourinhos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapContainer
        center={[-22.975861,-49.8653159]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      > 
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
      </MapContainer>

      <Link to='/' className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap