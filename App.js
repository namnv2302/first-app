import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PokemonScreen from "./screens/PokemonScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Pokemon" component={PokemonScreen} />
      </Drawer.Navigator>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffeec",
  },
});
