const API_KEY = "e60b4e1f99f930da766bccf67eb64196"

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child")    
    const city = document.querySelector("#weather span:last-child")    
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError () {
  alert("위치를 찾을 수 없는 관계로 날씨를 확인할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);