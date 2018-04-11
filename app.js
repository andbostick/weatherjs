//init objects
const weather = new Weather('Temecula', 'CA');
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
     .then(results => {
        ui.paint(results);
    })
     .catch(err => console.log(err));
}