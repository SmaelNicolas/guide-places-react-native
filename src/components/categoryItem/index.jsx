import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const CategoryItem = ({ item, onPressed }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => onPressed(item)}
				style={styles.button}>
				<Text style={styles.title}>{item.title}</Text>
				<Image source={{ uri: item.img }} style={styles.image} />
			</TouchableOpacity>
		</View>
	);
};
