import { TextInput } from "react-native";
import { COLORS } from "@/constants/COLORS";

interface IProps {
    width?: any;
    height?: number;
    placeholder: string;
    placeholderFontSize?: number;
    onValueChange?: (value: string) => void; 
    onValueReturn?: any;
    secureTextEntry?: boolean;
    style?: any;
    value?: string;
}

export default function CustomInput(props: IProps) {
    const { 
        width, 
        height, 
        placeholder, 
        onValueChange, 
        secureTextEntry, 
        placeholderFontSize, 
        style,
        value
    } = props;

    const handleChange = (text: string) => {
        if (onValueChange) {
            onValueChange(text); 
        }
    };

    return (
        <TextInput
            style={[
                { 
                    width: width, 
                    height: height, 
                    fontSize: placeholderFontSize,
                    color: COLORS.text.primary
                },
                style
            ]}
            placeholder={placeholder}
            placeholderTextColor={COLORS.text.secondary}
            onChangeText={handleChange}
            value={value}
            secureTextEntry={secureTextEntry}
            selectionColor={COLORS.brand.primary}
        />
    );
}

