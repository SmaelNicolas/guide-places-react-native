import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: 270,
		marginVertical: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "#CCDDE3",
		borderRadius: 5,
	},
	button: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontFamily: "MM-500",
		fontSize: 30,
		textAlign: "left",
		color: "#B076D1",
	},
	image: {
		width: 80,
		height: 80,
	},
});
