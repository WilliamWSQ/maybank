import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import usePlacesAutocomplete, {getGeocode,getLatLng} from "use-places-autocomplete";


const Search = ({ setSelected, historyRecord, searchHistoryArr }) => {
  
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
  
    const handleSelect = async (event, address) => {
      if(address){
        historyRecord(address)
        setValue(address, false);
        clearSuggestions();
  
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
        console.log(lat, lng)
      }
    }
  
    let history
    if(searchHistoryArr.length > 8){
      history = searchHistoryArr.slice(0, 8);
    } else {
      history = searchHistoryArr
    }
  
    return (
      <div className="places-container" >
          
            <Autocomplete
              disabled={!ready}
              value={value}
              onChange={handleSelect}
              onInputChange={(event, newInputValue) => {
                setValue(newInputValue)
              }}
              options={ status === "OK" ? data.map(({ place_id, description }) => description) : history }
              renderInput={(params) => <TextField 
                style={{ backgroundColor: "white" }} {...params} label="Search" 
                />
              }
          />
          
      </div>
    );
};

export default Search