import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
} from "react-native";
import {colors} from "../assets/Themes/colors";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
// import {SongDetail, SongPreview} from "./WebViews";
import SongDetailWeb from "./SongDetailWeb";

const SongPreview = ({navigation}) => {};

const dummyFunc = () => {
  console.log("clicked");
};

const SongDisplay = ({navigation, item}) => {
  return (
    <View style={styles.SongContainer}>
      <Pressable onPress={navigation.navigate(SongPreview)}>
        <Ionicons name="play-circle" size={20} color={colors.spotify} />
      </Pressable>
      <Image source={{uri: item.imageUrl}} style={styles.SongLogo} />
      <View style={styles.SongTitleContainer}>
        <Text numberOfLines={1} style={styles.SongTitle}>
          {item.songTitle}
        </Text>
        <Text numberOfLines={1} style={styles.SongArtists}>
          {item.appendArtists}
        </Text>
      </View>
      <Text numberOfLines={1} style={styles.SongAlbum}>
        {item.albumName}
      </Text>
      <Text style={styles.SongDuration}>{item.formatDuration}</Text>
    </View>
  );
};

const ParseData = ({tracks}) => {
  for (let i = 0; i < tracks.length; i++) {
    tracks[i]["songNum"] = i + 1;

    let appendArtists = "";
    for (let j = 0; j < tracks[i]["songArtists"].length; j++) {
      appendArtists += tracks[i]["songArtists"][j]["name"];
      appendArtists += ", ";
    }
    tracks[i]["appendArtists"] = appendArtists.substring(
      0,
      appendArtists.length - 2
    );
    let minutes = Math.floor(tracks[i]["duration"] / 60000);
    let seconds = ((tracks[i]["duration"] % 60000) / 1000).toFixed(0);
    tracks[i]["formatDuration"] =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return tracks;
};

const SongTracks = ({navigation, tracks}) => {
  const [selectedID, setSelectedID] = useState();
  return (
    <View
      style={{
        alignContent: "center",
        backgroundColor: "pink",
        height: 1000,
        width: 1000,
      }}>
      <Text style={{color: "white"}}>REEEEEEEEEEEEEEE</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/spotify-logo.png")}
          style={styles.headerLogo}
        />
        <Text style={styles.headerText}>My Top Tracks</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({item}) => (
          <SongDisplay navigation={navigation} item={item} />
        )}
        keyExtractor={(item) => item.previewUrl}
        extraData={selectedID}
      />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();
// albumName, duration, externalUrl, imageUrl, previewUrl
// songArtists, songTitle, songNum, appendArtists, formatDuration
export default function SongList({tracks}) {
  const [selectedID, setSelectedID] = useState();
  tracks = ParseData({tracks});
  console.log("parsed track #1:", tracks[0]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SongDetailWeb">
        <Stack.Screen
          name="SongTracks"
          component={SongTracks}
          // options={{headerShown: false}}
          initialParams={{tracks: tracks}}
        />
        <Stack.Screen
          name="SongDetailWeb"
          component={SongDetailWeb}
          options={{title: "Song details"}}
        />
        <Stack.Screen
          name="SongPreview"
          component={SongPreview}
          options={{title: "Song preview"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default SongList;

const songHeight = Dimensions.get("window").height / 10;
styles = StyleSheet.create({
  SongContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    height: songHeight,
    width: "100%",
  },
  SongLogo: {
    height: songHeight * 0.8,
    width: songHeight * 0.8,
  },
  SongNumber: {
    color: colors.gray,
    fontSize: 15,
  },
  SongTitleContainer: {
    width: "30%",
    justifyContent: "center",
  },
  SongTitle: {
    color: colors.white,
    fontSize: 15,
  },
  SongArtists: {
    color: colors.gray,
    fontSize: 15,
  },
  SongAlbum: {
    width: "20%",
    justifyContent: "center",
    fontSize: 15,
    color: colors.white,
  },
  SongDuration: {
    color: colors.white,
    fontSize: 15,
  },
  header: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  headerLogo: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
