import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";
import { useNavigate } from "react-router-dom";

export default function HomePage({ countries, setCountries }) {
  const push = useNavigate();
  const [filtered, setFiltered] = useState(countries);

  useEffect(() => {
    if (countries.length === 0) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
	 //eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
	 //eslint-disable-next-line
  }, [countries]);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(country => country.region.includes(region));
    }

    if (search) {
      data = data.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  };

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtered?.map(country => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Capital",
                description: country.pcapital,
              },
              {
                title: "Region",
                description: country.region,
              },
            ],
          };
          return (
            <Card
              key={country.name}
              onClick={() => push(`/country/${country.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
}
