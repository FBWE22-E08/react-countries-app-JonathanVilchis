import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function OneCountry() {
    let { code } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
            const data = await response.json();
            setCountry(data);
        }
        fetchData();
    }, [code]);
    return (
        <div>
            <h1>{country.name}</h1>
            <img src={country.flag} alt={country.name} width="300" />
            <div>
                <p>
                    <strong>Native Name:</strong> {country.nativeName}
                </p>
                <p>
                    <strong>Capital:</strong> {country.capital}
                </p>
                <p>
                    <strong>Population:</strong> {country.population}
                </p>
                <p>
                    <strong>Region:</strong> {country.region}
                </p>
                <p>
                    <strong>Subregion:</strong> {country.subregion}
                </p>
                <p>
                    <strong>Top Level Domain:</strong> {country.topLevelDomain}
                </p>
                <p>
                    <strong>Currencies:</strong>{" "}
                    {country.currencies && country.currencies.map((currency) => currency.name).join(", ")}
                </p>
                <p>
                    <strong>Languages:</strong>{" "}
                    {country.languages && country.languages.map((language) => language.name).join(", ")}
                </p>
            </div>
        </div>
    );
}
