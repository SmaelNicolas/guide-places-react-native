import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, PlaceDetail, Places } from "../screens";

const Stack = createNativeStackNavigator();

export const GuidePlacesNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Categories">
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
