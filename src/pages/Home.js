import React from 'react'
import Maps from "../components/maps"
import { useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading</div>;
  return <Maps />;
}
