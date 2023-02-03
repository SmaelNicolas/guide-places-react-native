import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const PlaceItem = ({ item, onPressed, img }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => onPressed(item)}>
				<Text style={styles.text}>{item.title}</Text>
				<Image style={styles.image} source={{ uri: img }} />
			</TouchableOpacity>
		</View>
	);
};
