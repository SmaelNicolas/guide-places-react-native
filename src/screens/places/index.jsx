import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { PlaceItem } from "../../components";
import { PLACES } from "../../constants/data";
import { styles } from "./styles";

export const Places = ({ navigation, route }) => {
	const { title, img } = route.params;

	const onPressed = (item) => {
		navigation.navigate("PlaceDetail", {
			title: item.title,
		});
	};

	const placesFiltered = PLACES.filter(
		(place) => place.category.toLowerCase() === title.toLowerCase()
	);

	const renderItem = ({ item }) => (
		<PlaceItem item={item} onPressed={onPressed} img={img} />
	);
	const keyExtractor = (item) => item.id.toString();

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={["#97D0E3", "#9BCADA", "#EBD6EC"]}
				start={{ x: 0.9, y: 0.05 }}
				style={styles.container}>
				<FlatList
					data={placesFiltered}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					contentContainerStyle={styles.contentContainerList}
				/>
			</LinearGradient>
		</SafeAreaView>
	);
};
