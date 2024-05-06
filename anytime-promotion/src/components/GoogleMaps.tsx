import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

export default function GoogleMaps() {

  const coordinates = {
    lat: 33.97307205200195,
    lng: -118.03467559814453
  }

  const containerStyle = {
    width: '100vw',
    height: '400px'
  };

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_KEY
  })

// const [address, setAddress] = useState<google.maps.Map | null>(null);

    // function onLoad(map: google.maps.Map) {
    //   const bounds = new window.google.maps.LatLngBounds(coordinates)
    //   console.log(bounds)
    //   if (map !== null) {
    //     map.fitBounds(bounds);
    //   }
    // }

  return (
    <>
    <div >
      {isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={coordinates}  zoom={18}/>
      )}
    </div>
    </>
  )
}
