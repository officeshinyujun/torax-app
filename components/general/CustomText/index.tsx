import { Text, TextStyle } from "react-native";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    fontColor?: string;
    fontSize?: number;
    fontWeight?: number;
    style?: any;
}

export default function CustomText(props: IProps) {
    const { children, fontColor, fontSize, fontWeight, style } = props;
    return (
        <Text style={{ color: fontColor, fontSize, fontWeight, ...style }}>
            {children}
        </Text>
    );
}
