import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export const ActivityIndicatorCustom = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="#999999" />
		</View>
	);
};
