import {useSpotifyAuth} from "../utils";
import SpotifyAuthButton from "./SpotifyAuthButton";
import SongList from "./SongList";

export default function BaseAuth({navigation}) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const {token, tracks, getSpotifyAuth} = useSpotifyAuth();

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <SongList navigation={navigation} tracks={tracks} />;
  } else {
    contentDisplayed = <SpotifyAuthButton authFunc={getSpotifyAuth} />;
  }

  return contentDisplayed;
}
