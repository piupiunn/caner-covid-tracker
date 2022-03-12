import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  //https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="app__header"></div>

      <h1>COVID TRACKER</h1>
      <FormControl className="dropdown">
        <Select variant="outlined" value="abc">
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
