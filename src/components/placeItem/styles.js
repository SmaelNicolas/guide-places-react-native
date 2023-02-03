import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: 300,
		marginVertical: 10,
		padding: 10,
		borderWidth: 2,
		borderColor: "#CCDDE3",
		borderRadius: 5,
	},
	button: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		fontFamily: "MM-600",
		fontSize: 24,
		textAlign: "center",
		color: "#6F69B7",
	},
	image: {
		width: 30,
		height: 30,
	},
});
