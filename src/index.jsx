import { ActivityIndicatorCustom } from "./components";
import { useCustomFonts } from "./hooks/useCustomFonts";
import { PlacesNavigatior } from "./navigation";

export const App = () => {
	const { loaded } = useCustomFonts();
	if (!loaded) return <ActivityIndicatorCustom />;
	return <PlacesNavigatior />;
};
