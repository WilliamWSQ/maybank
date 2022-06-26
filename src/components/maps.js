import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchHistory } from '../redux/actions/searchAction'
import { GoogleMap, Marker } from "@react-google-maps/api";
import Search from "../components/search"

const Maps = () => {

    const { searchHistoryArr } = useSelector(state => state.searchReducer)
    const center = useMemo(() => ({ lat: 3.1472732, lng: 101.6995352 }), []);
    const [selected, setSelected] = useState(null);
    const dispatch = useDispatch()
  
    console.log("selected", selected)
  
    const historyRecord = (address) => {
      dispatch(searchHistory(address))
    }
  
    return (
      <>
      <div className="places-container">
          <Search setSelected={setSelected} historyRecord={historyRecord} searchHistoryArr={searchHistoryArr}/>
      </div>
      <GoogleMap
        zoom={12}
        center={selected ? selected : center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
      </>
    );
}

export default Maps
  