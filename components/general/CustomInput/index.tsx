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
}

export default function CustomInput(props: IProps) {
    const { width, height, placeholder, onValueChange, secureTextEntry, placeholderFontSize } = props;

    const handleChange = (text: string) => {
        if (onValueChange) {
            onValueChange(text); 
        }
    };

    return (
        <TextInput
            style={[
                { width: width, height: height, fontSize: placeholderFontSize},
            ]}
            placeholder={placeholder}
            placeholderTextColor={COLORS.text.secondary}
            onChangeText={handleChange} 
            secureTextEntry={secureTextEntry} 
        />
    );
}

