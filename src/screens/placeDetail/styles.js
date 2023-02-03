import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: 250,
	},
	description: {
		paddingHorizontal: 20,
		textAlign: "justify",
		fontFamily: "MM-300",
		alignSelf: "center",
		marginTop: 20,
	},
	location: {
		textAlign: "justify",
		fontFamily: "MM-500",
		alignSelf: "center",
		marginTop: 20,
	},
	containerWeather: {
		padding: 15,
		marginVertical: 15,
	},
	weatherTitle: {
		textAlign: "center",
		marginVertical: 10,
		fontSize: 25,
		fontFamily: "MM-700",
		color: "#7D4DB3",
	},
	descriptionWeather: {
		fontFamily: "MM-600",
		color: "#7D4DB3",
		textTransform: "capitalize",
		marginVertical: 3,
		fontSize: 15,
	},
});
