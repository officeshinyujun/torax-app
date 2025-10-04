import CustomView from "../CustomView";
import { SPACING } from "@/constants/SPACING";
import CustomText from "../CustomText";
import { COLORS } from "@/constants/COLORS";
import { FONTS } from "@/constants/FONTS";

interface ISectionDefault {
    width : string;
    height : string;
    children : React.ReactNode;
    title : string;
}

export default function SectionDefault({width, height, children, title} : ISectionDefault) {
    return (
        <CustomView
            width={width}
            height={height}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            paddingVertical={SPACING.lg}
            paddingHorizontal={SPACING.lg}
            gap={SPACING.sm}
        >
            <CustomText
                fontSize={FONTS.text.xl}
                fontColor={COLORS.text.primary}
                fontWeight={FONTS.weight.bold}
            >
                {title}
            </CustomText>
            {children}
        </CustomView>
    )
}