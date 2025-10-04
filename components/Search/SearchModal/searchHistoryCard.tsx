import CustomView from "@/components/general/CustomView";
import { SPACING } from "@/constants/SPACING";
import { Clock } from "lucide-react-native";
import CustomText from "@/components/general/CustomText";
import { COLORS } from "@/constants/COLORS";

interface ISearchHistoryCard {
    name : string;
}

export default function SearchHistoryCard({name}: ISearchHistoryCard) {
    return (
        <CustomView
            width="100%"
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            paddingVertical={4}
            paddingHorizontal={SPACING.xs}
            gap={SPACING.xs}
        >
            <Clock size={24} color={COLORS.text.secondary} />
            <CustomText
                fontSize={16}
                fontColor={COLORS.brand.secondary}
            >
                {name}
            </CustomText>
        </CustomView>
    )
}