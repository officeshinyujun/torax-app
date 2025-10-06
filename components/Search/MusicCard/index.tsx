import CustomText from "@/components/general/CustomText";
import CustomView from "@/components/general/CustomView";
import { SPACING } from "@/constants/SPACING";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/COLORS";
import { FONTS } from "@/constants/FONTS";
import {Play} from "lucide-react-native";

interface IProps {
    title: string;
    artist: string;
    imgUrl: any;
}
export default function MusicCard({
    title,
    artist,
    imgUrl
}: IProps) {
    return (
        <CustomView 
            width="100%"
            height={71}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            paddingHorizontal={SPACING.sm}
            paddingVertical={SPACING.sm}
        style={styles.container}>
            <CustomView
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={SPACING.sm}
            >
                <Image
                    source={{ uri: imgUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <CustomView
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                    gap={6}
                >
                    <CustomText
                        fontSize={FONTS.text.md}
                        fontWeight={FONTS.weight.semibold}
                        fontColor={COLORS.text.primary}
                    >
                        {title.length > 20 ? title.slice(0, 20) + '...' : title}
                    </CustomText>
                    <CustomText
                        fontSize={FONTS.text.xs}
                        fontWeight={FONTS.weight.medium}
                        fontColor={COLORS.text.secondary}
                    >
                        {artist}
                    </CustomText>
                </CustomView>
            </CustomView>
            <TouchableOpacity
            activeOpacity={0.8}
            >
                <Play size={24} color={COLORS.brand.primary} />
            </TouchableOpacity>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container :{
        borderRadius : SPACING.lg,
        backgroundColor : COLORS.background.secondary,
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : SPACING.xs,
    }
})