document.addEventListener("DOMContentLoaded", function (event) {
    getCountry("Germany")
});

getCountry = (country) => {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
    .then(Response => Response.json())
    .then(country => {
        console.log(country[0]);
        document.getElementById("name").innerText = country[0].name;
        document.getElementById("capital").innerText = `Столица:  ${country[0].capital}`;
        document.getElementById("region").innerText = `Регион:  ${country[0].region}`;
        document.getElementById("timezones").innerText = `Таймзона:  ${country[0].timezones}`;
        document.getElementById("languages").innerText = `Язык:  ${country[0].languages[0].name}`;
    })
    .catch(error => console.log(error));
}