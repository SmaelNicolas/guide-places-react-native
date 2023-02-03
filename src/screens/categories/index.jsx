import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { CategoryItem } from "../../components";
import { CATEGORIES } from "../../constants/data";
import { styles } from "./styles";

export const Categories = ({ navigation }) => {
	const onPressed = (item) => {
		navigation.navigate("Places", {
			categoryId: item.id,
			title: item.title,
			img: item.img,
		});
	};
	const renderItem = ({ item }) => (
		<CategoryItem item={item} onPressed={onPressed} />
	);
	const keyExtractor = (item) => item.id.toString();

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={["#EBD6EC", "#9BCADA", "#97D0E3"]}
				start={{ x: 0.5, y: 0.1 }}
				style={styles.container}>
				<FlatList
					data={CATEGORIES}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					contentContainerStyle={styles.contentContainerList}
				/>
			</LinearGradient>
		</SafeAreaView>
	);
};
