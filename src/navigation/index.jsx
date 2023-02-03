import { NavigationContainer } from "@react-navigation/native";
import { GuidePlacesNavigator } from "./locations";

export const PlacesNavigatior = () => {
	return (
		<NavigationContainer>
			<GuidePlacesNavigator />
		</NavigationContainer>
	);
};
