import CustomView from "@/components/general/CustomView";
import CustomText from "@/components/general/CustomText";
import { COLORS } from "@/constants/COLORS";
import { TouchableOpacity } from "react-native";
import { SPACING } from "@/constants/SPACING";
    
interface ISearchModal {
    onClose: () => void;
    isVisible: boolean;
}

export default function SearchModal({onClose, isVisible}: ISearchModal) {
    return (
        <CustomView 
        width={350}
        height={313}
        style={{
            backgroundColor: COLORS.background.primary,
            display: isVisible ? 'flex' : 'none',
            zIndex: 9999,
            position: 'absolute',
            bottom: 86 + 20,
            alignItems: 'center',
            left: '50%',
            transform: [{ translateX: -175 }],
            borderRadius: SPACING.xxl,
            shadowColor: 'rgba(81, 81, 81, 0.25)',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 24,
        }}>
            <CustomText>SearchModal</CustomText>
            <TouchableOpacity onPress={onClose}>
                <CustomText>Close</CustomText>
            </TouchableOpacity>
        </CustomView>
    )
}