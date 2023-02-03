export const getWeather = (string, handleData) => {
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${string}&lang=sp&units=metric&APPID=6a9167c752f7617699b81023544a254b`
	)
		.then((response) => response.json())
		.then((data) => handleData(data));
};
