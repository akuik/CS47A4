import {StyleSheet} from "react-native";
import {Themes} from "./assets/Themes";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import SongDetailWeb from "./components/SongDetailWeb";
import BaseAuth from "./components/BaseAuth";
import SongPreviewWeb from "./components/SongPreviewWeb";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Back">
        <Stack.Screen
          name="Back"
          component={BaseAuth}
          options={{headerShown: false}}
          // initialParams={{tracks: tracks}}
        />
        <Stack.Screen
          name="SongDetailWeb"
          component={SongDetailWeb}
          options={{title: "Song Details"}}
        />
        <Stack.Screen
          name="SongPreviewWeb"
          component={SongPreviewWeb}
          options={{title: "Song Preview"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
