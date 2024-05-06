import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

export default function GoogleMaps() {

const [containerStyle, setContainerStyle] = useState({
    width: '100%',
    height: '400px'
})

useEffect(() => {
  function handleResize() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      setContainerStyle({
        width: '100%',
        height: '400px'
      })
    } else if (window.matchMedia("(min-width: 750px)").matches) {
      setContainerStyle({
        width: '100%',
        height: '500px'
      });
    } else {
      setContainerStyle({
        width: '100%',
        height: '400px'
      });
    }
  }
  window.addEventListener('resize', handleResize)
  handleResize();

    return () => window.removeEventListener('resize', handleResize);
}, [])

  const coordinates = {
    lat: 33.97307205200195,
    lng: -118.03467559814453
  }

  // const containerStyle = {
  //   width: '40vw',
  //   height: '400px'
  // };

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_KEY
  })


  return (
    <>
    <div className="md:w-1/2">
      {isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={coordinates}  zoom={18}/>
      )}
    </div>
    </>
  )
}
