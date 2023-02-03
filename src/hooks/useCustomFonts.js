import { useFonts } from "expo-font";
import React from "react";

export const useCustomFonts = () => {
	const [loaded] = useFonts({
		"MM-100": require("../../assets/fonts/MM-100.ttf"),
		"MM-200": require("../../assets/fonts/MM-200.ttf"),
		"MM-300": require("../../assets/fonts/MM-300.ttf"),
		"MM-400": require("../../assets/fonts/MM-400.ttf"),
		"MM-500": require("../../assets/fonts/MM-500.ttf"),
		"MM-600": require("../../assets/fonts/MM-600.ttf"),
		"MM-700": require("../../assets/fonts/MM-700.ttf"),
		"MM-800": require("../../assets/fonts/MM-800.ttf"),
		"MM-900": require("../../assets/fonts/MM-900.ttf"),
	});

	return { loaded };
};
