
const apiKey = '7ce9242fc61fc806b906c5b9538298fe';

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  return response.json();
}
export { getWeather };
