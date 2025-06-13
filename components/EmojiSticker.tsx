import { Image } from "expo-image";
import { ImageSourcePropType, View } from "react-native";

type Props = {
  imageSize: number;
  stickSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
