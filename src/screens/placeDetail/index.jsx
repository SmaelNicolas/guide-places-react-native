import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { ActivityIndicatorCustom } from "../../components/activityIndicator";
import { PLACES } from "../../constants/data";
import { getWeather } from "../../utils/getWeather";
import { styles } from "./styles";

export const PlaceDetail = ({ route }) => {
	const { title } = route.params;
	const [weather, setWeather] = useState(null);
	const place = PLACES.find((product) => product.title === title);

	const handleData = (data) => {
		setTimeout(() => {
			setWeather(data);
		}, 2000);
	};

	useEffect(() => {
		place.category === "playas" && getWeather(title, handleData);
	}, []);

	const renderWeather = () => {
		if (place.category !== "playas") return;
		return !weather ? (
			<ActivityIndicatorCustom />
		) : (
			<View style={styles.containerWeather}>
				<Text style={styles.weatherTitle}>Clima</Text>
				<Text style={styles.descriptionWeather}>
					🌡 Sensación Térmica : {weather.main.feels_like}{" "}
				</Text>
				<Text style={styles.descriptionWeather}>
					🌡 Temperatura : {weather.main.temp}{" "}
				</Text>
				<Text style={styles.descriptionWeather}>
					🌡 Temperatura Máxima : {weather.main.temp_max}{" "}
				</Text>
				<Text style={styles.descriptionWeather}>
					🌡 Temperatura Mínima : {weather.main.temp_min}{" "}
				</Text>
				<Text style={styles.descriptionWeather}>
					☁ Cielo : {weather.weather[0].description}{" "}
				</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={["#97D0E3", "#9BCADA", "#EBD6EC"]}
				start={{ x: 0.9, y: 0.05 }}
				style={styles.container}>
				<Image style={styles.image} source={{ uri: place.img }} />
				<Text style={styles.description}>{place.description}</Text>
				<Text style={styles.location}>🌍 {place.location}</Text>
				{renderWeather()}
			</LinearGradient>
		</View>
	);
};
