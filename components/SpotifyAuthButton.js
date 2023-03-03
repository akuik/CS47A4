import {Pressable, Text, Image, StyleSheet, SafeAreaView} from "react-native";
import {Themes} from "../assets/Themes";
const SpotifyAuthButton = ({authFunc}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.authButton} onPress={authFunc}>
        <Image
          source={require("../assets/spotify-logo.png")}
          style={styles.authLogo}
        />
        <Text style={styles.authText}>Connect with Spotify</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SpotifyAuthButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    width: "58%",
    height: "5%",
    borderRadius: 999999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  authLogo: {
    width: 15,
    height: 15,
    opacity: 1,
  },
  authText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 0,
  },
});
