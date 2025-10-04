import CustomView from "../CustomView";
import { SPACING } from "@/constants/SPACING";
import { COLORS } from "@/constants/COLORS";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { SvgXml } from 'react-native-svg';

export default function Header() {
    return (
        <CustomView
            width="100%"
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            paddingVertical={SPACING.xs}
            paddingHorizontal={SPACING.lg}
        >
            <Image
                source={require('@/assets/images/torax-logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <CustomView style={styles.profileContainer} />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        borderRadius : 999,
        backgroundColor : COLORS.brand.primary,
        width : 30,
        height : 30,
        alignItems : 'center',
        justifyContent : 'center',
    },
    logo: {
        width: 48,
        height: 26,
    }
});
