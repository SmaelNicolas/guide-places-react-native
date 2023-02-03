import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, PlaceDetail, Places } from "../screens";

const Stack = createNativeStackNavigator();

export const GuidePlacesNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Categories"
			screenOptions={{
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor: "#d8f1f5",
				},
				headerTintColor: "#392496",
				navigationBarColor: "transparent",
				headerTitleStyle: {
					fontFamily: "MM-700",
					fontSize: 20,
					color: "#6F69B7",
				},
			}}>
			<Stack.Screen
				name="Categories"
				component={Categories}
				options={{
					title: "Lugares a visitar",
				}}
			/>
			<Stack.Screen
				name="Places"
				component={Places}
				options={({ route }) => ({
					title: route.params.title,
				})}
			/>
			<Stack.Screen
				name="PlaceDetail"
				component={PlaceDetail}
				options={({ route }) => ({
					title: route.params.title,
				})}
			/>
		</Stack.Navigator>
	);
};
