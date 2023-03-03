import {View} from "react-native";
import {WebView} from "react-native-webview";

export default function SongPreviewWeb({route}) {
  const {url} = route.params;
  console.log(url);
  return <WebView source={{uri: url}} />;
}
