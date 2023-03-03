import {StyleSheet, SafeAreaView, Text} from "react-native";
import {useSpotifyAuth} from "./utils";
import {Themes} from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const {token, tracks, getSpotifyAuth} = useSpotifyAuth();

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <SongList tracks={tracks} />;
  } else {
    contentDisplayed = <SpotifyAuthButton authFunc={getSpotifyAuth} />;
  }

  return (
    <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
    flexDirection: "row",
    alignItems: "center",
  },
  authText: {
    color: "white",
  },
});
