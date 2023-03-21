const loadAllCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHtml = countries.map(country => getCountries(country))
    const container = document.getElementById('container');
    container.innerHTML = countriesHtml.join(' ');
    
}
//getCountry in 3 ways---
//1st:
/* const getCountries = country =>{
    console.log(country);
    return `
        <div class= "country">
        <h2>${country.name.common}</h2>
        <img id="country-img" src="${country.flags.png}">
        </div>
    
    `
} */

//2nd:destructuring
/* const getCountries = country =>{
    const {name, flags} = country;
    return `
        <div class= "country">
        <h2>${name.common}</h2>
        <img id="country-img" src="${flags.png}">
        </div>
    
    `
} */

//3rd:
const getCountries = ({name,capital, flags}) =>{
    return `
        <div class= "country">
        <h2>${name.common}</h2>
        <h3>Capital: ${capital}</h3>
        <img id="country-img" src="${flags.png}">
        </div>

    `;
}

loadAllCountries();