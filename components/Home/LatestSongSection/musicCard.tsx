import CustomView from "@/components/general/CustomView";
import { SPACING } from "@/constants/SPACING";
import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from "@/components/general/CustomText";
import { FONTS } from "@/constants/FONTS";
import { COLORS } from "@/constants/COLORS";
import { ImageBackground } from "react-native";

export default function MusicCard({
    title,
    artist,
    imgUrl
}: {
    title: string;
    artist: string;
    imgUrl: any;
}) {
    return (
    <ImageBackground
      source={imgUrl}
      style={styles.container}
      resizeMode="cover"
      imageStyle={styles.image}
    >
      <LinearGradient
        style={styles.gradient}
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <CustomView width="100%" style={styles.contents}>
          <CustomText
            fontSize={FONTS.text.xl}
            fontWeight={FONTS.weight.semibold}
            fontColor={COLORS.text.primary}
          >{title}</CustomText>
          <CustomText
            fontSize={FONTS.text.md}
            fontWeight={FONTS.weight.regular}
            fontColor={'#c4c4c4'}
          >{artist}</CustomText>
        </CustomView>
      </LinearGradient>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        borderRadius: SPACING.lg,
        overflow: 'hidden',
    },
    image: {
        borderRadius: SPACING.lg,
    },
    contents: {
        padding: SPACING.sm,
        height: '100%',
        justifyContent: 'flex-end',
    },
    gradient: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
})